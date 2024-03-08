import * as db from '../Config/dbconnection';

class Base {

    public static getEbookbyId (id: String,table: String, condition: String) { 
        let result = [];
        let sql = `SELECT ,
                  LastName lastName,
                  Email email
            FROM customers
            WHERE Country = ?
            ORDER BY FirstName`;
        
    }
}

