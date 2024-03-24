import { Request, Response } from "express";
import Puppeteer from "../Pupperteer";
import fileSystem from "../Fs";

class Docln {
  
    public static async getLink (req:Request, res: Response) {
        // get Use link -> pupeteer
        const link: string = req.body.link;
        const element : string = req.body.element;
        const content : any = await Puppeteer.getText (link,element);
        console.log (link , element);
        fileSystem.appendFile ('./text.html',JSON.stringify(content) );

    }

    public static async getImage (req:Request, res: Response) {
        // get Use link -> pupeteer
        const link: string = req.body.link;
        const content : any = await Puppeteer.getImage (link);
        console.log (content)
    }

    public static async saveChapter (name : string, author: string, content:string, chapter: string) {
        // save it into sqlite
    }

    public static async toEpub (){

    }
}

export default Docln ;