import { Application } from "express";
import Puppeteer from "../Controllers/API/Pupperteer";
import { Router } from 'express';
import express  from "express";
import proxy from "../Controllers/Proxy";

let router = express.Router();

const Routes = (app: Application) => {
    router.get ('/pupe', Puppeteer.config)
    router.get ('/r',Puppeteer.getlost )
    router.get ('/rs',proxy.getProxy)
    return app.use('/', router);
}

export default Routes