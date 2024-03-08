import { Request, Response } from "express";
import puppeteer from "puppeteer";
import fileSystem from "./Fs";
import EpubGen from "./EpubGen";



class Puppeteer {
   
    public static async getContent (req: Request ,res: Response) {
        // Initiate the browser 
	const browser = await puppeteer.launch(); 
	 
	// Create a new page with the default browser contet 
	const page = await browser.newPage(); 
 
	// Go to the target website 
	await page.goto('https://docln.net/truyen/16934-danjo-no-yuujou-ha-seiritsu-suru-iya-shinai'); 

	// await page.setViewport({width: 1080, height: 1024});

	// await page.screenshot({ path: 'screenshot.png' });
	var chapters : any;
	var title : String = 'https://docln.net/truyen/16934-danjo-no-yuujou-ha-seiritsu-suru-iya-shinai';
	var links = await page.evaluate (() => Array.from (document.querySelectorAll('.chapter-name a'), (e:any) => e.href));
	for (let i : number = 0 ; i < links.length; i++) {
		await page.goto(links [i]);
		chapters = await page.evaluate (() => Array.from (document.querySelectorAll('#chapter-content'), (e:any) => e.innerText));
		console.log (chapters.toString())
		fileSystem.appendFile('./sd.txt', chapters.toString());
		new Promise(r => setTimeout(r, 4000))
	}
	// await page.screenshot({ path: 'screenshot.png' });

	// console.log ("Secc");
	
 
	// Closes the browser and all of its pages 
	await browser.close(); 

    return res.send (links)
      
    }

	async delay (time : number) {
		return new Promise(function(resolve) { 
			setTimeout(resolve, time)
		});
	}
}

export default Puppeteer;