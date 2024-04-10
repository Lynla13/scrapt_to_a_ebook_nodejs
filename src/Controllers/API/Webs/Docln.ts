import { Request, Response } from "express";
import Puppeteer from "../Pupperteer";
import puppeteer, { Browser } from "puppeteer";
import fileSystem from "../Fs";
import Book from "../../../Models/Book"
import Chapter from  "../../../Models/Chapter"
const link : string = "https://docln.net";

class Docln {
  

    public static async getBook(req:Request, res: Response) {

        const query: string = req.body.query;
        const searchLink : string = `https://docln.net/tim-kiem?keywords=${query}%3F`;
        const getLNLink : string = '.series-title';
        const getTitle : string = ".series-name a";
        const getSumary : string  = ".summary-content";
        const getAuthor : string = ".info-value a";
        const getChapter : string =  ".chapter-name";
        const getChapterContent : string = "#chapter-content";
        //Config pupperteer here
        const browser = await puppeteer.launch({headless: false, args: ['--disable-features=site-per-process']});
		const page = await browser.newPage(); 
        await page.setViewport({ width: 1280, height: 720 });
        await page.goto(Puppeteer.proxy (`${searchLink}`), {waitUntil: 'networkidle2'}); 
        //Get link and covert to usable link
        const href = await page.$eval(`${getLNLink} a`, (elm) => elm.href);
        // Puppeteer.replaceLink (href : Link need to convert, link: base link)
        const subLink : string = Puppeteer.replaceLink (href, link)
        // Goto link
        await page.goto(subLink, {waitUntil: 'networkidle2'}); 
        Puppeteer.delay (400);
        const title: any = await page.$eval(`${getTitle}`, (elm) => elm.textContent);
        const sumary: any = await page.$eval(`${getSumary}`, (elm) => elm.textContent);
        const author : any = await page.$eval (`${getAuthor}`, (elm) => elm.textContent);
        // Get raw link
        const sample = await page.$$eval(`${getChapter} a`, (list) => list.map((elm) => elm.href));
        //SaveBook to database
        Book.insertBook (title, sample.length, author,sumary);
        //Save chapter
        const chapterLink : any = []
        for(let i=0; i < sample.length; i++) {
            chapterLink[i] = Puppeteer.replaceLink (sample[i], link);
           }
        for (let j = 0; j < chapterLink.length; j++) {
            await page.goto(Puppeteer.proxy (`${chapterLink [j]}`), {waitUntil: 'networkidle2'}); 
            const content : any = await page.$eval (`${getChapterContent}`, (elm) => elm.textContent);
            Chapter.insertChapter (title, j, content)
            Puppeteer.delay (400);
        } 
        await browser.close ()
    }


    public static saveBook ( name : any, chap_quantity: number, author: string, sumary: any) {
       Book.insertBook (name, chap_quantity, author, sumary);
    }

    static async toEpub (){

    }
}

export default Docln ;