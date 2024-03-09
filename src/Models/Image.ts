import * as db from '../Config/dbconnection';

class Image {

    public static insertImage (param : [string]) {
        return db.db.run(
            'INSERT INTO image (ebook_id, picture, chap_number, picture_order) VALUES (?,?,?,?,?)',
            param)
        
    }

    public static getBook (param : [string]){
        return db.db.get (
            'SELECT DISTINCT * FROM image WHERE ebook_id = ? and chap_number = ?', param)
    }

}

export default Image;

