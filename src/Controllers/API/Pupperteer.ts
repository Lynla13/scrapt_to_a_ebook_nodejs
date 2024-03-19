import { Request, Response, json } from "express";
import puppeteer from "puppeteer";
import fileSystem from "./Fs";
import EpubGen from "./EpubGen";
import insertBook from './../../Models/Book';
import proxyController from "../Proxy";



class Puppeteer {
   
    public static async pupeteer (link: string) {

		//Buid a confif for pupeteer to use on later
		const browser = await puppeteer.launch();

		const page = await browser.newPage(); 
		await page.goto(link); 
		var content = await page.evaluate (() => Array.from (document.querySelectorAll('.chapter-name a'), (e:any) => e.href));
		await browser.close ()
		return content;
    }



	async delay (time : number) {
		return new Promise(function(resolve) { 
			setTimeout(resolve, time)
		});
	}

	public static async getlost (req: Request ,res: Response) {
		let a = await insertBook.getEbook('1')
		console.log (a);
		return res.send( a);
	}
}

export default Puppeteer;