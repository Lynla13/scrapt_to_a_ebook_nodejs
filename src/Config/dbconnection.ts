const sqlite3 = require('sqlite3').verbose();

// open database in memory
export class Databse {
    public openDatabse () {
        let db = new sqlite3.Database('./db/book.db', (err: any) => {
            if (err) {
              console.error(err.message);
            }
            console.log('Connected to the chinook database.');
          });
    }
    
    public closeDatabse () {
      
    }
    
}


