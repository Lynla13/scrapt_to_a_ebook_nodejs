import { Application } from "express";
import BookController from '../Controllers/Book'
import Puppeteer from "../Controllers/API/Puppeteer";
import { Router } from 'express';
import express  from "express";

let router = express.Router();

const Routes = (app: Application) => {
    router.get('/getbook', BookController.getBookInfo);
    router.get ('/pupe', Puppeteer.getContent)
    return app.use('/', router);
}

export default Routes