import { Application } from "express";
import BookController from '../Controllers/Book'
import { Router } from 'express';
import express  from "express";

let router = express.Router();

const Routes = (app: Application) => {
    router.get('/getbook', BookController.getBookInfo);
    return app.use('/', router);
}

export default Routes