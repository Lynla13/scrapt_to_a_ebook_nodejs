import * as db from '../Config/dbconnection';

class Image {

    public static insertImage( book_id : string, image_number: string, image: string) {
        return db.db.run(
            //${name},${chap_quantity},${author},${page},${sumary}
            `INSERT INTO image (book_id, image_number,image) VALUES (?,?,?)`,
            [ book_id,image_number, image])
        
    }


}

export default Image;

