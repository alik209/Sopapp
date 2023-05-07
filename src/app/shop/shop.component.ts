import { TemplateLiteral } from '@angular/compiler';
import {Component} from '@angular/core'
import { Product } from '../model/product.model';
import { ProductRepository } from '../model/product.repository';
import { CategoryRepository } from '../model/category.repository';
import { Category } from '../model/category.model';
import { Cart } from '../model/cart.model';
import {Router} from '@angular/router';

@Component ({

  selector: 'shop',
  templateUrl : 'shop.component.html',
 


})
export class ShopComponent {

    public selectedCategory! : Category| undefined;
    public productsPerPage =3;
    public selectedPage =1;
    // pageNumbers =[1,2,3,4,5];

    constructor(private productRepository: ProductRepository,
        private CategoryRepository: CategoryRepository,
        private cart:Cart,
        private router: Router
        )
        
        
        
        
        {
        }

        get products():Product[]{
            let index = (this.selectedPage-1) * this.productsPerPage;

            return this.productRepository.getProducts(this.selectedCategory).slice(index, index+this.productsPerPage);
        }

          get pageNumbers(): number []{
          return Array(Math.ceil(this.productRepository.getProducts(this.selectedCategory).length / this.productsPerPage))
                  .fill(0)
                  .map((a, i) => i + 1);
          }


        changePage(p: number){
            this.selectedPage =p;
        }


        get categories(): Category []{
            return this.CategoryRepository.getCategories();
        }


        changeCategory(newCategory?:Category){
            this.selectedCategory = newCategory ;
        }

        addProductToCart(product: Product){
            this.cart.addItem(product);
            this.router.navigateByUrl('/cart');

        }
}