import { Request, Response } from "express";
import Puppeteer from "../Pupperteer";
import puppeteer, { Browser } from "puppeteer";
import fileSystem from "../Fs";
import Book from "../../../Models/Book"
const link : string = "https://docln.net";

class Docln {
  

    public static async getBook(req:Request, res: Response) {

        const query: string = req.body.query;
        //Config pupperteer here
        const browser = await puppeteer.launch({headless: false, args: ['--disable-features=site-per-process']});
		const page = await browser.newPage(); 
        await page.setViewport({ width: 1280, height: 720 });
        await page.goto(Puppeteer.proxy (`https://docln.net/tim-kiem?keywords=${query}%3F`), {waitUntil: 'networkidle2'}); 
        //Get link and covert to usable link
        const href = await page.$eval(".series-title a", (elm) => elm.href);
        // Puppeteer.replaceLink (href : Link need to convert, link: base link)
        const subLink : string = Puppeteer.replaceLink (href, link)
        // Goto link
        await page.goto(subLink, {waitUntil: 'networkidle2'}); 
        Puppeteer.delay (400);
        const title: any = await page.$eval(".series-name a", (elm) => elm.textContent);
        const sumary: any = await page.$eval(".summary-content", (elm) => elm.textContent);
        const author : any = await page.$eval (".info-value a", (elm) => elm.textContent);
        // Get raw link
        const sample = await page.$$eval(".chapter-name a", (list) => list.map((elm) => elm.href));
        //SaveBook to database
        Book.insertEbook (title, sample.length, author,sumary);
        await browser.close ()
    }

    static getChapter(sample : any) {
        const chapterLink : any = []
        for(let i=0; i < sample.length; i++) {
            chapterLink[i] = Puppeteer.replaceLink (sample[i], link);
           }
        console.log (chapterLink)
    }
  
    public static saveBook ( name : any, chap_quantity: number, author: string, sumary: any) {
       Book.insertEbook (name, chap_quantity, author, sumary);
    }

    static async toEpub (){

    }
}

export default Docln ;