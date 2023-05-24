import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductApiService {

  constructor(private http : HttpClient) { }

  getProduct() {
    return this.http.get<any>("https://fakestoreapi.com/products/").pipe(map((res:any)=>{
      return res;
    }));
  }
}
