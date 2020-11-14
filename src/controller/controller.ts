import {Express,Request,Response} from 'express';
import Service from '../service/service';
export default class Controller{

    private server:Express;
    private service:Service;
   
    public constructor(server:Express){
        this.server = server;
        this.service = new Service();
    }

    public router(){
        this.server.get("/sin",(req,res)=>this.getSin(req,res));
        this.server.get("/cos",(req,res)=>this.getCos(req,res));
        this.server.get("/tan",(req,res)=>this.getTan(req,res));
        this.server.get("/cotan",(req,res)=>this.getCotan(req,res));
    }

    public getSin(req:Request,res:Response){
        const n = parseInt(req.query.n.toString());
        res.send(this.service.sin(n).toString());
    }

    public getCos(req:Request,res:Response){
        const n = parseInt(req.query.n.toString());
        res.send(this.service.cos(n).toString());
    }

    public getTan(req:Request,res:Response){
        const n = parseInt(req.query.n.toString());
        res.send(this.service.tan(n).toString());
    }

    public getCotan(req:Request,res:Response){
        res.status(500);
        res.send("");
    }

}