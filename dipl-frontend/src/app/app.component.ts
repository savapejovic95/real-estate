import { Component } from '@angular/core';
import { RealEstate } from './model/real-estate';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  realEstates: RealEstate[];
  _router: Router;
  selectedRealEstateId: string;
 
  constructor(_router: Router) {
    this._router = _router;
  }

  ngOnInit(): void {
  }

  recieveFilteredRealEstates($event){
    this.realEstates = $event;
  }

  recieveSelectedRealEstate($event){
    this.selectedRealEstateId = $event;
  }

}
