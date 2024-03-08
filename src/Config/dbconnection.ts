const sqlite3 = require('sqlite3').verbose();

// open database in memory
export class db {

    public static runQuery (sql: any, params:[any]) {
      var db = new sqlite3.Database('/media/Game/CODE/NodeJs-Project/scrapt_to_a_ebook_nodejs/src/Config/db/book.db', (err: any) => {
        if (err) console.error(err.message);
      });
      return new Promise((resolve, reject) => {  
        db.run(sql, params, function (err: any) {  
          if (err) { 
            console.log('Error running sql ' + sql)
            console.log(err)
            reject(err)
          } else { 
            console.log('Thanh cong')
          }
        })
      })
    }  
}

export default db;

