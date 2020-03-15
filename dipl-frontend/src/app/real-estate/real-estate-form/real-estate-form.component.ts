import { Component, OnInit } from '@angular/core';
import { RealEstate } from 'src/app/model/real-estate';
import { Router } from '@angular/router';
import { RealEstateService } from 'src/app/service/real-estates.service';
import { City } from 'src/app/model/city';
import { CityPart } from 'src/app/model/city-part';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-real-estate-form',
  templateUrl: './real-estate-form.component.html',
  styleUrls: ['./real-estate-form.component.css']
})
export class RealEstateFormComponent implements OnInit {

  realEstate: RealEstate;
  city: string;
  partsDisabled: boolean;
  cityPartId: string;
  formSubmited: boolean;
  realEstateId: string;

  constructor(
    private router: Router,
    private realEstateService: RealEstateService,
    private userService: UserService
  ) { 
    this.realEstate = new RealEstate();
  }

  public cities: Array<City> = [];
  public cityParts: Array<CityPart> = [];
  public types: Array<string> = ["Stan", "Kuca", "Soba", "Garaza"];
  public services: Array<string> = ["Prodaja", "Izdavanje"];
  public heatingTypes: Array<string> = ["CG", "EG", "TA", "Gas", "Podno"];

  ngOnInit(): void {
    this.citiesDropdownRefresh();
    this.partsDisabled = true;
    this.formSubmited = false;
    this.userService.findUserById("1").subscribe(data => {
      this.realEstate.user =  data;
    });
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
    this.realEstateService.findCityPartsByCityId(this.city).subscribe(data=>{
      console.log(data);
      data.forEach(element => {
        this.cityParts.push(element)
      });
    })
  }

  onCityPartChange() {
    this.realEstateService.findCityPartById(this.cityPartId).subscribe(data => {
      this.realEstate.cityPart =  data;
    });
  }

  onSubmit() {
    console.log(this.realEstate);
    this.realEstateService.saveRealEstate(this.realEstate).subscribe(result => this.goToUploadImages(result.id));
  }

  goToUploadImages(id:string) {
    console.log(id);
    this.realEstateId = id;
    this.formSubmited = true;
  }

  gotoRealEstatesList() {
    this.router.navigate(['/all']);
  }

}
