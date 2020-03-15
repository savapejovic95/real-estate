import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RealEstate } from 'src/app/model/real-estate';
import { Filter } from 'src/app/model/filter';
import { RealEstateService } from 'src/app/service/real-estates.service';
import { CityPart } from 'src/app/model/city-part';
import { City } from 'src/app/model/city';
import { Image } from 'src/app/model/image';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  filteredRealEstates: RealEstate[];
  title: string;
  partsDisabled: boolean;
  hideFilters: boolean;
  filter: Filter;
  images: Image[];

  @Output() filteredRealEstatesEvent = new EventEmitter<RealEstate[]>();
 
  constructor(private realEstateService: RealEstateService) {
    this.title = 'SPIS - Agencija za nekretnine';
    this.filter = new Filter();
    this.filteredRealEstates = [];
  }

  public cityParts: Array<CityPart> = [];
  public cities: Array<City> = [];
  public types: Array<string> = ["Stan", "Kuca", "Soba", "Garaza"];
  public services: Array<string> = ["Prodaja", "Izdavanje"];

  ngOnInit(): void {
    this.citiesDropdownRefresh();
    this.partsDisabled = true;
    this.hideFilters = false;
  }

  citiesDropdownRefresh() {
    this.realEstateService.findAllCities().subscribe(data=>{
      data.forEach(element => {
        this.cities.push(element)
      });
    })
  }

  onCityChange() {
    this.partsDisabled = false;
    this.cityParts = [];
    this.realEstateService.findCityPartsByCityId(this.filter.cityId).subscribe(data=>{
      data.forEach(element => {
        this.cityParts.push(element)
      });
    })
  }

  showFilters(){
    this.hideFilters = !this.hideFilters;
  }

  onSubmit() {
    console.log(this.filter);
    this.hideFilters = true;
    this.realEstateService.findFilteredRealEstates(this.filter).subscribe(data => {
      this.filteredRealEstates =  data;
      this.populateImages();
      this.filteredRealEstatesEvent.emit(this.filteredRealEstates);
    });
  }

  populateImages(){
    this.realEstateService.getAllImages().subscribe(data => {
      this.images = data;
      for (var realEstate of this.filteredRealEstates) {
        for (var image of this.images) {
          image.convertedImage = 'data:image/jpeg;base64,' + image.pic;
          if(realEstate.id == image.realEstate.id){
            realEstate.image = image;
          }
        }
      }
    });
  }
}
