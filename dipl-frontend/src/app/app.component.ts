import { Component } from '@angular/core';
import { RealEstate } from './model/real-estate';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  realEstates: RealEstate[];
 
  constructor() {
  }

  ngOnInit(): void {
  }

  recieveFilteredRealEstates($event){
    this.realEstates = $event;
    console.log(this.realEstates);
  }

}
