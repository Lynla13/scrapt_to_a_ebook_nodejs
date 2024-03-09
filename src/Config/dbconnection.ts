const sqlite3 = require('sqlite3').verbose();
const filePath : string = '/media/Game/CODE/NodeJs-Project/scrapt_to_a_ebook_nodejs/src/Config/db/book.db'

// open database in memory
export class db {

    public static async run (sql: any, param: any) {
      var db = new sqlite3.Database(filePath, (err: any) => {
        if (err) console.error(err.message);
        });
      return db.run(sql, param, function(err : any) {
        if (err) 
        {
          return console.error(err.message + " ,SQl:"+ sql);
        }
        console.log(`Rows inserted`);
      });
  }


  public static async get(sql: any, param: any) {
    var db = new sqlite3.Database(filePath, (err: any) => {
      if (err) console.error(err.message);
    });
    return new Promise((resolve, reject) => {
      db.all(sql, param, (err:any, rows : any) => {
        if (err) {
          console.log('Error running sql: ' + sql)
          console.log(err)
          reject(err)
        } else {
          resolve(rows)
        }
      })
    })
    }
    
    public static async getAll (sql: any, params:[any]) {
      var db = new sqlite3.Database(filePath, (err: any) => {
        if (err) console.error(err.message);
      });
      return new Promise((resolve, reject) => {
            db.all(sql, params, (err:any, rows : any) => {
              if (err) {
                console.log('Error running sql: ' + sql)
                console.log(err)
                reject(err)
              } else {
                resolve(rows)
              }
            })
          })
    }
   

      // get(sql, params = []) {
    //   return new Promise((resolve, reject) => {
    //     this.db.get(sql, params, (err, result) => {
    //       if (err) {
    //         console.log('Error running sql: ' + sql)
    //         console.log(err)
    //         reject(err)
    //       } else {
    //         resolve(result)
    //       }
    //     })
    //   })
    // }
  
    // all(sql, params = []) {
    //   return new Promise((resolve, reject) => {
    //     this.db.all(sql, params, (err, rows) => {
    //       if (err) {
    //         console.log('Error running sql: ' + sql)
    //         console.log(err)
    //         reject(err)
    //       } else {
    //         resolve(rows)
    //       }
    //     })
    //   })
    // }
  }
export default db;

