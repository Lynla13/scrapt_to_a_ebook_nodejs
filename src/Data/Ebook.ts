
class Ebook {
    
    id : String;
    chap_quantity : Number;
    site: String;
    name: String;

     constructor (id: String , chap_quantity: Number, site: String, name: string) {
        this.id = id;
        this.name= name;
        this.chap_quantity = chap_quantity;
        this.site = site;
    }

}

export default Ebook;