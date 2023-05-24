import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CaartServiceService {

  public cartListItem :any = [];
  public productList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<any>([]);
  constructor() { }
  getProduct(){
    return this.productList.asObservable();
  }

  setProduct(product : any){
    this.cartListItem.push(...product);
    this.productList.next(product);
  }

  addtoProduct(product : any){
    this.cartListItem.push(product);
    this.productList.next(this.cartListItem);
    this.getTotalPrice();
    console.log(this.cartListItem);
  }

  getTotalPrice():  number{
    let grandTotal = 0;
    this.cartListItem.map((a:any)=>{
      grandTotal += a.total;
    })
    return grandTotal;
  }
  removeCartItem(product:any){
    this.cartListItem.map((a:any,index:any)=>{
      if(product.id === a.id){
        this.cartListItem.splice(index,1)
      }
    })
    this.productList.next(this.cartListItem);
  }

  removeAllProduct(){
    this.cartListItem=[]
    this.productList.next(this.cartListItem)
  }
}
