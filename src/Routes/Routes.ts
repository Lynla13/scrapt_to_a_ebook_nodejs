import { Application } from "express";
import Puppeteer from "../Controllers/API/Pupperteer";
import { Router } from 'express';
import express  from "express";
import proxy from "../Controllers/Proxy";
import Docln from "../Controllers/API/Webs/Docln";
import ZeroChan from "../Controllers/API/Zerochan";
import BlogTruyen from "../Controllers/API/Webs/Blogtruyen";

let router = express.Router();

const Routes = (app: Application) => {
    router.post ('/docln', Docln.getBook)
    router.post ('/blogtruyen', BlogTruyen.getBookByLink)
    router.post ('/get', ZeroChan.getImageBySearch)
    return app.use('/', router);
}

export default Routes