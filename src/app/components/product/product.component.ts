import { Component } from '@angular/core';
import { CaartServiceService } from 'src/app/services/caart-service.service';
import { ProductApiService } from 'src/app/services/product-api.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  public productLis:any;
  public searchKey:string='';
  public filterCategory : any ;
  constructor(private api:ProductApiService,
    private cart : CaartServiceService){}

  ngOnInit(): void {
   this.api.getProduct().subscribe(res=>{
    this.productLis = res;
    this.filterCategory=res;
   this.productLis.forEach((a:any) => {
    if(a.category == "men's clothing" || a.category =="women's clothing" ){
      a.category = "fashion";
    }
    Object.assign(a,{quantity:1,total:a.price});    
   }); } );

   this.cart.search.subscribe((val:any)=>{
    this.searchKey=val;
   });
  }

  addtoCart(item : any){
    this.cart.addtoProduct(item);
  }

  filter(category:string){
    this.filterCategory = this.productLis.filter((a:any)=>{
      if(a.category == category || category =="" ){
        return a;
      }
    }) 
  }
}
