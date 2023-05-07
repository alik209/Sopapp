// import { Injectable, OnInit } from "@angular/core";
// import { Product } from "./product.model";
// import { RestService } from "./rest.service";
// import { Category } from "./category.model";

// @Injectable()
// export class ProductRepository implements OnInit{
//     private products: Product[] =[];

//     constructor(private restService:RestService ){

         
//     }

//     ngOnInit() {
//           this.restService.getProducts()
//         .subscribe(products => this.products = products)
//     }

//     getProduct(id: number): Product  | undefined{
//         return this.products.find(i => i.id === id);
//     }
//     getProducts(category: Category =null ): Product[]{
//         if(category)
//         return this.products.filter(p=>p.category==category.name);

//         else
//         return this.products

//     }

// }

import { Injectable, OnInit } from "@angular/core";
import { Product } from "./product.model";
import { RestService } from "./rest.service";
import { Category } from "./category.model";

@Injectable()
export class ProductRepository implements OnInit{
    private products: Product[] =[];

    constructor(private restService:RestService ){

         
    }

    ngOnInit() {
          this.restService.getProducts()
        .subscribe(products => this.products = products)
    }

    getProduct(id: number): Product  | undefined{
        return this.products.find(i => i.id === id);
    }
    getProducts(category: Category| null = null): Product[]{
        if (category) {
            return this.products.filter(p => p.category === (category as Category));
        } else {
            return this.products;
        }
    }

}
