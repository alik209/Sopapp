import { Injectable } from "@angular/core";
import { Cart } from "./cart.model";

@Injectable()
export class order{
    public id?:number;
    public name?: string;
    public adress?: string;
    public city?: string;
    public phone?: string;
    public email?: string;


    public isSent: boolean=false;


    constructor(public cart:Cart){


    }



    clearOrder(){
        this.id =  undefined;
        this.name = this.adress =this.city=this.phone=this.email=   undefined;
        this.isSent= false;
        this.cart.clear();
    }



}