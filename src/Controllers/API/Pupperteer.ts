import { Request, Response, json } from "express";
import puppeteer, { Browser } from "puppeteer";
import insertBook from './../../Models/Book';
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