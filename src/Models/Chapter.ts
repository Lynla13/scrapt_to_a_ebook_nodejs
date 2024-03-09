import * as db from '../Config/dbconnection';

class chapter {

    public static insertChapter (param : [string]) {
        return db.db.run(
            'INSERT INTO chapter(ebook_id, image_quantity, content, chap_number) VALUES (?,?,?,?)',
            param)
        
    }

    public static getChapter (param : [string]){
        return db.db.get (
            'SELECT DISTINCT * FROM chapter WHERE ebook_id = ?', param)
    }

}

export default chapter;

