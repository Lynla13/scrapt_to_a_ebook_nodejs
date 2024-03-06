import express,{ Application,Request,Response,NextFunction, application } from 'express';
import "dotenv/config";
import bodyParser from 'body-parser';
import Routes from './Routes/Routes';

const app : Application = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const PORT = process.env.PORT;

// Roters 
Routes (app)

app.listen(PORT,() => {
    console.log(`server is running on PORT ${PORT}`) })