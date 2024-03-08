import Epub from "epub-gen";

class EpubGen {
    public static epubCreate (title: string, author : string, cover: string, content : string ) {
        const option = {
            title: title,
            author: author,
            cover: cover,
            content: [
                {
                    data: content // pass html string
                }
            ]
        };
    new Epub(option, "./");
    }
}

export default EpubGen;