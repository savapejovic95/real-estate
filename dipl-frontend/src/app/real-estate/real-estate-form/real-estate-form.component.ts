import { Component, OnInit } from '@angular/core';
import { RealEstate } from 'src/app/model/real-estate';
import { Router } from '@angular/router';
import { RealEstateService } from 'src/app/service/real-estates.service';
import { City } from 'src/app/model/city';
import { CityPart } from 'src/app/model/city-part';

@Component({
  selector: 'app-real-estate-form',
  templateUrl: './real-estate-form.component.html',
  styleUrls: ['./real-estate-form.component.css']
})
export class RealEstateFormComponent implements OnInit {

  realEstate: RealEstate;
  city: string;
  partsDisabled: boolean;

  constructor(
    private router: Router,
    private realEstateService: RealEstateService
  ) { 
    this.realEstate = new RealEstate();
  }

  public cities: Array<City> = [];
  public cityParts: Array<CityPart> = [];

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
    this.realEstateService.findAllCityParts(this.city).subscribe(data=>{
      console.log(data);
      data.forEach(element => {
        this.cityParts.push(element)
      });
    })
  }

  onSubmit() {
    this.realEstateService.saveRealEstate(this.realEstate).subscribe(result => this.gotoRealEstatesList());
  }

  gotoRealEstatesList() {
    this.router.navigate(['/all']);
  }

}
