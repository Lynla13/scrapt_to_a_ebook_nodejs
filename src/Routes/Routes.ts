import { Application } from "express";
import Puppeteer from "../Controllers/API/Pupperteer";
import { Router } from 'express';
import express  from "express";
import proxy from "../Controllers/Proxy";
import Docln from "../Controllers/API/Webs/Docln";
import ZeroChan from "../Controllers/API/Zerochan";

let router = express.Router();

const Routes = (app: Application) => {
    router.post ('/rsi',Docln.getLightNovel)
    router.post ('/get', ZeroChan.getImageBySearch)
    return app.use('/', router);
}

export default Routes