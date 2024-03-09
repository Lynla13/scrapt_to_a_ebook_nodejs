import * as db from '../Config/dbconnection';

class ebook {

    // public static insertEbook (id: string, chap_quantity: number, site: any, name: string) {
    //     return db.db.run(
    //         'INSERT INTO ebook (id, chap_quantity, site, name) VALUES (?,?,?,?)',
    //         [id, chap_quantity, site, name])
        
    // }

    public static getEbook (id: string){
        return db.db.get (
            'SELECT DISTINCT * FROM ebook WHERE id = ?', [id])
    }

}

export default ebook;

