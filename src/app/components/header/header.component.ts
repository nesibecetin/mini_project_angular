import { Component } from '@angular/core';
import { CaartServiceService } from 'src/app/services/caart-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  
  constructor(private cart : CaartServiceService){}  
  public totalItem :number = 0;
  public searchTerm :string = '';

  ngOnInit(): void {
   this.cart.getProduct().subscribe(res=>{
    this.totalItem = res.length;})


    
  }
  search(event : any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.cart.search.next(this.searchTerm);

  }
}
