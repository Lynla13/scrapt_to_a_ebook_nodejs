import { Request, Response } from "express";
import puppeteer from "puppeteer";

class Puppeteer {
   
    public static async getContent (req: Request ,res: Response) {
        // Initiate the browser 
	const browser = await puppeteer.launch(); 
	 
	// Create a new page with the default browser context 
	const page = await browser.newPage(); 
 
	// Go to the target website 
	await page.goto('https://docln.net/truyen/16934-danjo-no-yuujou-ha-seiritsu-suru-iya-shinai'); 

	// await page.setViewport({width: 1080, height: 1024});

	// await page.screenshot({ path: 'screenshot.png' });
	var chapters 
	var links = await page.evaluate (() => Array.from (document.querySelectorAll('.chapter-name a'), (e:any) => e.href));
	for (let i : number = 0 ; i < 2; i++) {
		await page.goto(links [i]);
		chapters = await page.evaluate (() => Array.from (document.querySelectorAll('#chapter-content'), (e:any) => e.innerHTML));
	}
	// await page.screenshot({ path: 'screenshot.png' });
	console.log (links)

	// console.log ("Secc");
	
 
	// Closes the browser and all of its pages 
	await browser.close(); 

    return res.send (chapters)
      
    }

	// let code run in for-loop to get all content

}

export default Puppeteer;