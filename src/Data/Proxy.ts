
class Proxy {
    
    ip_address : String;
    port : String;
    contry: String;

     constructor (ip_address: string, port: string , contry: string) {
        this.ip_address = ip_address
        this.contry = contry
        this.port = port
    }

    proxy () {
        return "hello"
    }

}

export default Proxy;