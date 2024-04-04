import { Request, Response } from "express";
import Puppeteer from "../Pupperteer";
import puppeteer, { Browser } from "puppeteer";
import fileSystem from "../Fs";
const link : string = "https://docln.net";

class Docln {
  

    public static async getLightNovel(req:Request, res: Response) {
        // get Use link -> pupeteer
        const query: string = req.body.query;
        const browser = await puppeteer.launch({headless: false, args: ['--disable-features=site-per-process']});
		const page = await browser.newPage(); 
        await page.setViewport({ width: 1280, height: 720 });
        await page.goto(Puppeteer.proxy (`https://docln.net/tim-kiem?keywords=${query}%3F`), {waitUntil: 'networkidle2'}); 
        //Get link and covert to usable link
        const href = await page.$eval(".series-title a", (elm) => elm.href);
        const subLink : string = Puppeteer.replaceLink (href, link)
        console.log (subLink);
        // Goto link
        await page.goto(subLink, {waitUntil: 'networkidle2'}); 
        Puppeteer.delay (400);
        await browser.close ()
    }

    public static replaceChapter () {
        
    }
    public static async saveChapter (name : string, author: string, content:string, chapter: string) {
        // save it into sqlite
    }

    public static async toEpub (){

    }
}

export default Docln ;