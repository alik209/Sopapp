import { RestService } from "./rest.service";
import { order } from "./order.model";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class OrderRepository{

    private orders: order[] =[];

    constructor(private restService:RestService){


    }

    getOrders(): order[]{
        return this.orders
    }


    saveOrder(order:order):Observable<order>{
        return this.restService.saveOrder(order);
    }

}