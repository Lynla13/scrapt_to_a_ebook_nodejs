import * as db from '../Config/dbconnection';

class chapter {

    public static insertChapter( book_id : any, chap_number: number, content: string) {
        return db.db.run(
            //${name},${chap_quantity},${author},${page},${sumary}
            `INSERT INTO chapter (book_id, chap_number, content) VALUES (?,?,?)`,
            [ book_id, chap_number, content])
        
    }
    public static getChapter (param : [string]){
        return db.db.get (
            'SELECT DISTINCT * FROM chapter WHERE ebook_id = ?', param)
    }

}

export default chapter;

