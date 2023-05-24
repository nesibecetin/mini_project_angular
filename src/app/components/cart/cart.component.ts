import { Component } from '@angular/core';
import { CaartServiceService } from 'src/app/services/caart-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  public product : any =[];
  public grandTotal !: number ;

  constructor(private cartService : CaartServiceService){}
  ngOnInit(): void {
   this.cartService.getProduct().subscribe(res=>{
    this.product = res ;
    this.grandTotal = this.cartService.getTotalPrice();
   })
  }

  removeItem(product : any){
    this.cartService.removeCartItem(product);

  }
  emptyCart(){
    this.cartService.removeAllProduct();
  }
}
