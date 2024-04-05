import * as db from '../Config/dbconnection';

class ebook {

    public static insertEbook ( name : any, chap_quantity: number, author: string, sumary: any) {
        return db.db.run(
            //${name},${chap_quantity},${author},${page},${sumary}
            `INSERT INTO book (name, chapter_quantity, author, sumary) VALUES (?,?,?,?)`,
            [ name, chap_quantity, author, sumary])
        
    }

    public static getEbook (id: string){
        return db.db.get (
            'SELECT DISTINCT * FROM ebook WHERE id = ?', [id])
    }

}

export default ebook;

