import fs from "fs"

class fileSystem  {

    public static appendFile(dir : string, content: string) {
        fs.appendFile(dir, content,  (() => (err: any, data: string) => {
            if (err) throw err;
            console.log(err);
        }));
        console.log('write file successfully');
    }   

    public static readFileJSON (dir: string) {
        var obj : JSON
        return obj = JSON.parse(fs.readFileSync(dir, 'utf8'));
    }
}

export default fileSystem;