import { Request, Response } from "express";
import Puppeteer from "../Pupperteer";

class ZeroChan{
  
    public static async getLink (req:Request, res: Response) {
        // get Use link -> pupeteer
        var link: string = req.body.link;
        var element : string = req.body.element;
        Puppeteer.getText(link,element);

    }

    public static async saveChapter (name : string, author: string, content:string, chapter: string) {
        // save it into sqlite
    }

    public static async toEpub (){

    }
}

export default ZeroChan ;