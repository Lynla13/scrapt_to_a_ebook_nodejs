import { Request, Response } from "express";
import Puppeteer from "../Pupperteer";
import fileSystem from "../Fs";
const link : string = "https://blogtruyen.vn"
class BlogTruyen {
  //get truyen moi 
 //get truyen by tim kiem
//Luu truyen vao sqlite de de tim 
// Rotate về ip của mình

    public static async getBookByLink(req:Request, res: Response) {
        const mangalink: string = req.body.link;
        const getTitle : string = ".entry-title";
        const getSumary : string  = ".content" ;
        const getAuthor : string = ".content";
        const getChapter : string =  "#loadChapter";
        const getChapterContent : string = "#content";
        Puppeteer.getBookByLinkImage (link,mangalink,getTitle, getSumary, getAuthor, getChapter, getChapterContent)
    }

    static async toEpub (){

    }
}

export default BlogTruyen ;