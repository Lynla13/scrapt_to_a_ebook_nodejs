import { Request, Response, json } from "express";
import puppeteer, { Browser } from "puppeteer";
import insertBook from './../../Models/Book';
const PROXY_API = process.env.PROXY_API; 


class Puppeteer {
   
    public static async getHTML (link: string, element : string) {

		const browser = await puppeteer.launch({headless: false, args: ['--disable-features=site-per-process']});
		//setup
		const page = await browser.newPage(); 

		await page.setViewport({ width: 1280, height: 720 });
		// get Link And Run
		const Proxy = `http://api.scraperapi.com?api_key=${PROXY_API}&url=${link}`
		await page.goto(Proxy); 
		
		Puppeteer.delay (4000);
		
		Puppeteer.delay (4000);
		const content : any = await page.$eval(`${element}`, e => e.textContent);
		await browser.close ()
		return content;
    }

	public static async getText (link: string, element : string) {

		const browser = await puppeteer.launch({headless: false, args: ['--disable-features=site-per-process']});
		//setup
		const page = await browser.newPage(); 

		await page.setViewport({ width: 1280, height: 720 });
		// get Link And Run
		const Proxy = `http://api.scraperapi.com?api_key=${PROXY_API}&url=${link}`
		await page.goto(Proxy); 
		
		Puppeteer.delay (4000);


		const content : any = await page.$eval(`${element}`, e => e.textContent);
		await browser.close ()
		return content;
    }

	
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


	public static async screenShot (link: string) {

		const browser = await puppeteer.launch({headless: false, args: ['--disable-features=site-per-process']});
		//setup
		const page = await browser.newPage(); 

		await page.setViewport({ width: 1280, height: 720 });
		// get Link And Run
		const Proxy = `http://api.scraperapi.com?api_key=${PROXY_API}&url=${link}`
		await page.goto(Proxy); 
		
		Puppeteer.delay (4000);
		await page.screenshot({
			path: './screenshot.jpg',
		  });
		
		 await browser.close ()
		
	}


	public static async delay (time : number) {
		return new Promise(function(resolve) { 
			setTimeout(resolve, time)
		});
	}

}

export default Puppeteer;