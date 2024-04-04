import { Request, Response } from "express";
import Puppeteers from "./Pupperteer";
import puppeteer, { Browser } from "puppeteer";
const link : string = "https://docln.net/";
  

class ZeroChan{
   
    public static async getLink (req:Request, res: Response) {
        // get Use link -> pupeteer
        var link: string = req.body.link;
        var element : string = req.body.element;

    }

    public static async getImageBySearch (req:Request, res: Response) {
        // get Use link -> pupeteer
        const query: string = req.body.query;
        const browser = await puppeteer.launch({headless: false, args: ['--disable-features=site-per-process']});
		const page = await browser.newPage(); 
        await page.setViewport({ width: 1280, height: 720 });
        await page.goto( await Puppeteers.proxy (link), {waitUntil: 'networkidle2'}); 
        await page.focus('.search-input')
        await page.keyboard.type(`${query}`)
        Puppeteers.delay (4000);
        await page.keyboard.press('Enter');
        
       
        // const image : any = '';
        // return image;

    }


    public static async saveChapter (name : string, author: string, content:string, chapter: string) {
        // save it into sqlite
    }

    public static async toEpub (){

    }
}

export default ZeroChan ;