import { Component, OnInit } from '@angular/core';
import { RealEstate } from 'src/app/model/real-estate';
import { Router, ActivatedRoute } from '@angular/router';
import { RealEstateService } from 'src/app/service/real-estates.service';
import { TokenStorageService } from 'src/app/service/token-storage.service';
import { City } from 'src/app/model/city';
import { CityPart } from 'src/app/model/city-part';

@Component({
  selector: 'app-real-estate-edit',
  templateUrl: './real-estate-edit.component.html',
  styleUrls: ['./real-estate-edit.component.css']
})
export class RealEstateEditComponent implements OnInit {

  isLoggedIn = false;
  realEstate: RealEstate;
  city: string;
  partsDisabled: boolean;
  cityPartId: string;
  formSubmited: boolean;
  realEstateId: string;

  constructor(
    private router: Router,
    private realEstateService: RealEstateService,
    private tokenStorageService: TokenStorageService,
    private route: ActivatedRoute
  ) { 
    this.route.params.subscribe(params => {
      this.realEstateId = params['realEstateId'];
      realEstateService.findRealEstateById(this.realEstateId).subscribe(realEstate => this.realEstate = realEstate);
    });
  }

  public cities: Array<City> = [];
  public cityParts: Array<CityPart> = [];
  public types: Array<string> = ["Stan", "Kuca", "Soba", "Garaza"];
  public services: Array<string> = ["Prodaja", "Izdavanje"];
  public heatingTypes: Array<string> = ["CG", "EG", "TA", "Gas", "Podno"];

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    this.citiesDropdownRefresh();
    this.partsDisabled = true;
    this.formSubmited = false;
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
    this.realEstateService.updateRealEstate(this.realEstate).subscribe(result => console.log(result));
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
