import { Component } from '@angular/core';
import { CityPart } from './model/city-part';
import { RealEstateService } from './service/real-estates.service';
import { City } from './model/city';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  typeFilter: string;
  serviceFilter: string;
  cityIdFilter: string;
  cityPartIdFilter: string;
  partsDisabled: boolean;
  priceFilter: string;
  squareMetersFilter: string;
  roomsFilter: string;
 
  constructor(private realEstateService: RealEstateService) {
    this.title = 'SPIS - Agencija za nekretnine';
  }

  public cityParts: Array<CityPart> = [];
  public cities: Array<City> = [];
  public types: Array<string> = ["Stan", "Kuca", "Soba", "Garaza"];
  public services: Array<string> = ["Prodaja", "Izdavanje"];

  ngOnInit(): void {
    this.citiesDropdownRefresh();
    this.partsDisabled = true;
  }

  citiesDropdownRefresh() {
    this.realEstateService.findAllCities().subscribe(data=>{
      console.log(data);
      data.forEach(element => {
        this.cities.push(element)
      });
    })
  }

  onCityChange() {
    this.partsDisabled = false;
    this.cityParts = [];
    this.realEstateService.findCityPartsByCityId(this.cityIdFilter).subscribe(data=>{
      console.log(data);
      data.forEach(element => {
        this.cityParts.push(element)
      });
    })
  }

  onSubmit() {
    //find with filters
  }
}
