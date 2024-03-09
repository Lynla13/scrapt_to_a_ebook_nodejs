import * as db from '../Config/dbconnection';
import Proxy from '../Data/Proxy';

class ProxyModel {

    public static insert (ip_address: string ,port: string, contry: string) {
        return db.db.run(
            "INSERT INTO proxy (ip_address, port, contry) VALUES ('"+ip_address+"','"+port+"','"+contry+"')",
            [])
        
    }

    public static select (contry : string){
        return db.db.get (
            "SELECT DISTINCT * FROM proxy WHERE contry = '"+contry+"'", [])
    }

}

export default ProxyModel;

