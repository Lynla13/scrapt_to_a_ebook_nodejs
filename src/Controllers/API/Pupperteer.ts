import { Request, Response, json } from "express";
import puppeteer from "puppeteer";
import fileSystem from "./Fs";
import EpubGen from "./EpubGen";
import insertBook from './../../Models/Book';
import proxyController from "../Proxy";



class Puppeteer {
   
    public static async config (req: Request ,res: Response) {
		var link = req.body.link ;
		var name = req.body.name;
		var contry = req.body.contry || 'VN'
		var proxy = await proxyController.getRandomProxyByContry (contry)
		var ip_address : string = proxy.ip_address
		var port : string = proxy.port
		const proxyURL = `${ip_address}:${port}`
		console.log (proxyURL)


		const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox', `--proxy-server=socks5://162.214.102.195:58994`] });

		const page = await browser.newPage(); 
		await page.goto('https://docln.net/truyen/16934-danjo-no-yuujou-ha-seiritsu-suru-iya-shinai'); 
		console.log ("Haha")

		// await page.setViewport({width: 1080, height: 1024});

		// // await page.screenshot({ path: 'screenshot.png' });
		// var chapters : any;
		var title : String = 'https://docln.net/truyen/16934-danjo-no-yuujou-ha-seiritsu-suru-iya-shinai';
		await page.screenshot({ path: 'screenshot.png' });
		var links = await page.evaluate (() => Array.from (document.querySelectorAll('.chapter-name a'), (e:any) => e.href));
		console.log (links)
		// for (let i : number = 0 ; i < links.length; i++) {
		// 	await page.goto(links [i]);
		// 	chapters = await page.evaluate (() => Array.from (document.querySelectorAll('#chapter-content'), (e:any) => e.innerText));
		// 	console.log (chapters.toString())
		// 	fileSystem.appendFile('./sd.txt', chapters.toString());
		// 	new Promise(r => setTimeout(r, 4000))
		// }
		// await page.screenshot({ path: 'screenshot.png' });

		// console.log ("Secc");
		//https://geonode.com/free-proxy-list // Free proxy
	
		// Closes the browser and all of its pages 
		await browser.close ()
		

		// return res.send (links)
      
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