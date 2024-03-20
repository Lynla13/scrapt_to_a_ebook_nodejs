import { Request, Response, json } from "express";
import puppeteer, { Browser } from "puppeteer";
import insertBook from './../../Models/Book';
const PROXY_API = process.env.PROXY_API; 


class Puppeteer {
   
    public static async getPupeteer (link: string, element : string) {

		//Buid a confif for pupeteer to use on later
		const browser = await puppeteer.launch();
		//setup
		const page = await browser.newPage(); 
		await page.setViewport({ width: 1280, height: 720 });
		// gaet Link And Run
		const Proxy = `http://api.scraperapi.com?api_key=${PROXY_API}&url=${link}`
		await page.goto(Proxy); 
		
		Puppeteer.delay (4000);
		const content : any = await page.evaluate (() => (document.querySelectorAll(`${element}`), (e:any) => e.InnerText));
		await browser.close ()
		return content;
    }



	public static async delay (time : number) {
		return new Promise(function(resolve) { 
			setTimeout(resolve, time)
		});
	}

}

export default Puppeteer;