import { Request, Response, json } from "express";
import puppeteer from "puppeteer";
import fileSystem from "./Fs";
import EpubGen from "./EpubGen";
import insertBook from './../../Models/Book';
import proxyController from "../Proxy";
import Docln from "./Webs/Docln";



class Puppeteer {
   
    public static async pupeteer () {

		//Buid a confif for pupeteer to use on later
		var link: string = '12'

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