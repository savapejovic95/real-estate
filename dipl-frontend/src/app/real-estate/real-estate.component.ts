import { Component, OnInit } from '@angular/core';
import { RealEstate } from '../model/real-estate';

@Component({
  selector: 'app-real-estate',
  templateUrl: './real-estate.component.html',
  styleUrls: ['./real-estate.component.css']
})
export class RealEstateComponent implements OnInit {

  realEstates: RealEstate[];
  selectedRealEstateId: string;
 
  constructor() {  }

  ngOnInit(): void {
  }

  recieveFilteredRealEstates($event){
    this.realEstates = $event;
  }

  recieveSelectedRealEstate($event){
    this.selectedRealEstateId = $event;
  }

}
