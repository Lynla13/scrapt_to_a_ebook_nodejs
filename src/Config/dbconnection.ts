const sqlite3 = require('sqlite3').verbose();

// open database in memory
export class Databse {
    public openDatabse () {
        let db = new sqlite3.Database(':memory:', (err :any) => {
            if (err) {
              return console.error(err.message);
            }
            console.log('Connected to the in-memory SQlite database.');
        });
    }
    
    public closeDatabse () {
      
    }
    
}


