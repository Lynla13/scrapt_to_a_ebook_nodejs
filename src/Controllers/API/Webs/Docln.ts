import { Request, Response } from "express";
import Puppeteer from "../Pupperteer";

class Docln {
  
    public static async getLink (req:Request, res: Response) {
        // get Use link -> pupeteer

        var link: string = req.body.link;
        Puppeteer.pupeteer (link)
        


    }

    public static async returnLink (link: string) {
    }
    
    public static async saveChapter (name : string, author: string, content:string, chapter: string) {
        // save it into sqlite
    }

    public static async toEpub (){

    }
}

export default Docln ;