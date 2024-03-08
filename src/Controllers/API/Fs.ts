import fs from "fs"

class fileSystem  {

    public static appendFile(dir : string, content: string) {
        fs.appendFile(dir, content,  (() => (err: any, data: string) => {
            if (err) throw err;
            console.log(err);
        }));
        console.log('write file successfully');
    }   
}

export default fileSystem;