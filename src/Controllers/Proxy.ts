import fileSystem from  "./API/Fs"
import ProxyModel from "../Models/Proxy"

class proxy {
    public static insertProxy () {
        var proxy = fileSystem.readFileJSON("src/Public/Json/AU.json");
        for (var i : number = 0; i < proxy.length; i++) {
            //ProxyModel.insertProxy (proxy [i].ip , proxy [i].port ,proxy [i].country)
        }
    }

    public static async getProxy () {
       console.log (await proxy.getRandomProxyByContry('VN'))
       console.log (await proxy.getRandomProxyByContry('VN'))
       console.log (await proxy.getRandomProxyByContry('VN'))
       console.log (await proxy.getRandomProxyByContry('VN'))
    }

    public static async getRandomProxyByContry(contry :any) {
        var ProxyByContry : any = await ProxyModel.select(contry);
        var radomn = ProxyByContry[Object.keys(ProxyByContry)[Math.floor(Math.random()*Object.keys(ProxyByContry).length)]];
        return radomn;
      }
      
}

export default proxy;