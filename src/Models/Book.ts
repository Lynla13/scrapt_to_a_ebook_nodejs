import * as db from '../Config/dbconnection';

class Book {

    public static insertBook (table: string, param : [string]) {
        return db.db.runQuery(
            'INSERT INTO ebook (id,title,) VALUES (?)',
            param)
        
    }
    // public static getEbookbyId (id: String,table: String, condition: String) { 
    //     let result = [];
    //     let sql = `SELECT ,
    //               LastName lastName,
    //               Email email
    //         FROM customers
    //         WHERE Country = ?
    //         ORDER BY FirstName`;
        
    // }
}

export default Book;

