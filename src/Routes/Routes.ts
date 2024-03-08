import { Application } from "express";
import Puppeteer from "../Controllers/API/Pupperteer";
import { Router } from 'express';
import express  from "express";

let router = express.Router();

const Routes = (app: Application) => {
    router.get ('/pupe', Puppeteer.getContent)
    return app.use('/', router);
}

export default Routes