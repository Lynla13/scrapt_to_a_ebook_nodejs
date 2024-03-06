
class Book {
    
    id : Number;
    name : String;
    author: String;
    content: String;
    chapter: Number;

     constructor (id : Number, name : String, author: String, content: String, chapter: Number) {
        this.id = id;
        this.name= name;
        this.author = author;
        this.content = content;
        this.chapter = chapter;
    }

}

export default Book;