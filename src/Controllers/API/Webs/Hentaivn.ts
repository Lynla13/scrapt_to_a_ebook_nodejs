import { Request, Response } from "express";
import Puppeteer from "../Pupperteer";
import fileSystem from "../Fs";

const link : string = "https://hentaivn.icu";

class HentaiVN {
  //get truyen moi 
    public async getNewBook () {

      }
 //get truyen by tim kiem
//Luu truyen vao sqlite de de tim 
// Rotate về ip của mình

    public static async getSearchBook(req:Request, res: Response) {
        const query: string = req.body.query;
        const searchLink : string = `https://hentaivn.icu/forum/search-plus.php?name=${query}&dou=&char=&tag[]=71&search=`;
       // Dont put a here cause it already had a in puperteer file
       // And it dont work if i didnt do that
        const getBookLink : string = '.search-des';
       // This is after move to manga site
        const getTitle : string = ".page-info h1 a";
        const getSumary : string  = ".page-info h1 a p .info";
        const getAuthor : string = ".page-info h1 a p .info";
        const getChapter : string =  ".listing tbody tr td";
        const getChapterContent : string = "#image";
        Puppeteer.getBookByLinkImage (link,searchLink,getBookLink,getTitle, getSumary, getAuthor, getChapter)
    }

    static async toEpub (){

    }
}

export default HentaiVN ;