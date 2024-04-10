import { Request, Response, json } from "express";
import puppeteer, { Browser } from "puppeteer";
import Book from './../../Models/Book';
import chapter from "../../Models/Chapter";
const PROXY_API = process.env.PROXY_API; 


class Puppeteer {
	
	public static async getImage (link: string) {

		const browser = await puppeteer.launch({headless: false, args: ['--disable-features=site-per-process']});
		//setup
		const page = await browser.newPage(); 

		await page.setViewport({ width: 1280, height: 720 });
		// get Link And Run
		const Proxy = `http://api.scraperapi.com?api_key=${PROXY_API}&url=${link}`
		await page.goto(Proxy); 
		
		Puppeteer.delay (4000);

		const image : any = await page.$$eval('img', images => {
			return images.map(img => img.src);
		  });
		await browser.close ()
		return image;
    }

	public static async getBook (link: string,searchLink: string, 
		getBookLink: string, getTitle: string, getSumary: string,getAuthor: string, getChapter: string, getChapterContent: string ) {

		const browser = await puppeteer.launch({headless: false, args: ['--disable-features=site-per-process']});
		 const page = await browser.newPage(); 
		 await page.setViewport({ width: 1280, height: 720 });
		 await page.goto(Puppeteer.proxy (`${searchLink}`), {waitUntil: 'networkidle2'}); 
		 const href = await page.$eval(`${getBookLink} a`, (elm) => elm.href);
		 const subLink : string = Puppeteer.replaceLink (href, link)
		 await page.goto(subLink, {waitUntil: 'networkidle2'}); 
		 Puppeteer.delay (400);

		 const title: any = await page.$eval(`${getTitle}`, (elm) => elm.textContent);
		 const sumary: any = await page.$eval(`${getSumary}`, (elm) => elm.textContent);
		 const author : any = await page.$eval (`${getAuthor}`, (elm) => elm.textContent);
		 const sample = await page.$$eval(`${getChapter} a`, (list) => list.map((elm) => elm.href));
		
		 Book.insertBook (title, sample.length, author,sumary);
		 const chapterLink : any = []
		 for(let i=0; i < sample.length; i++) {
			 chapterLink[i] = Puppeteer.replaceLink (sample[i], link);
			}
		 for (let j = 0; j < chapterLink.length; j++) {
			 await page.goto(Puppeteer.proxy (`${chapterLink [j]}`), {waitUntil: 'networkidle2'}); 
			 const content : any = await page.$eval (`${getChapterContent}`, (elm) => elm.textContent);
			 chapter.insertChapter (title, j, content)
			 Puppeteer.delay (400);
		 } 
		 await browser.close ()
	}
	

	public static proxy (link: string) {
		const Proxy: string = `https://api.scraperapi.com?api_key=${PROXY_API}&url=${link}`
		return Proxy;
	}

	public static delay (time : number) {
		return new Promise(function(resolve) { 
			setTimeout(resolve, time)
		});
	}

	public static replaceLink (str : string , link: string) {
        return str.replace ('https://api.scraperapi.com',link);
    }
    

}

export default Puppeteer;