import { Component } from '@angular/core';
import { CityPart } from './model/city-part';
import { RealEstateService } from './service/real-estates.service';
import { City } from './model/city';
import { Filter } from './model/filter';
import { RealEstate } from './model/real-estate';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  filteredRealEstates: RealEstate[];
  title: string;
  partsDisabled: boolean;
  filter: Filter;
 
  constructor(private realEstateService: RealEstateService) {
    this.title = 'SPIS - Agencija za nekretnine';
    this.filter = new Filter();
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
    this.realEstateService.findCityPartsByCityId(this.filter.cityId).subscribe(data=>{
      console.log(data);
      data.forEach(element => {
        this.cityParts.push(element)
      });
    })
  }
  printResult() {
    console.log(this.filteredRealEstates);
  }

  onSubmit() {
    console.log(this.filter);
    this.realEstateService.findFilteredRealEstates(this.filter).subscribe(data => {
      this.filteredRealEstates =  data;
    });
    this.printResult();
  }
}
