import { Application } from "express";
import Puppeteer from "../Controllers/API/Pupperteer";
import { Router } from 'express';
import express  from "express";
import proxy from "../Controllers/Proxy";
import Docln from "../Controllers/API/Webs/Docln";

let router = express.Router();

const Routes = (app: Application) => {
    router.post('/docln/', Docln.getLink)  
    router.get ('/rs',proxy.getProxy)
    return app.use('/', router);
}

export default Routes