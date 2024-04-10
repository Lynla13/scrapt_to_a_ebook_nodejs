import { Request, Response } from "express";
import Puppeteer from "../Pupperteer";
import fileSystem from "../Fs";

const link : string = "https://docln.net";

class Docln {
  

    public static async getBook(req:Request, res: Response) {
        const query: string = req.body.query;
        const searchLink : string = `https://docln.net/tim-kiem?keywords=${query}%3F`;
        const getBookLink : string = '.series-title';
        const getTitle : string = ".series-name a";
        const getSumary : string  = ".summary-content";
        const getAuthor : string = ".info-value a";
        const getChapter : string =  ".chapter-name";
        const getChapterContent : string = "#chapter-content";
        Puppeteer.getBook (link,searchLink,getBookLink,getTitle, getSumary, getAuthor, getChapter, getChapterContent)
    }

    static async toEpub (){

    }
}

export default Docln ;