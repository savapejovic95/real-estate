import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RealEstate } from 'src/app/model/real-estate';
import { RealEstateService } from 'src/app/service/real-estates.service';
import { Image } from 'src/app/model/image';

@Component({
  selector: 'app-real-estate-list',
  templateUrl: './real-estate-list.component.html',
  styleUrls: ['./real-estate-list.component.css']
})
export class RealEstateListComponent implements OnInit {

  @Input() realEstates: RealEstate[];
  @Output() selectedRealEstateEvent = new EventEmitter<string>();
  images: Image[];
  imagesAdded: boolean;

  constructor(private realEstateService: RealEstateService) { }

  ngOnInit() {
    this.imagesAdded = false;
    this.realEstateService.findAllRealEstates().subscribe(data => {
      this.realEstates = data;
      this.populateImages();
    });
  }

  populateImages(){
    this.realEstateService.getAllImages().subscribe(data => {
      this.images = data;
      for (var realEstate of this.realEstates) {
        for (var image of this.images) {
          image.convertedImage = 'data:image/jpeg;base64,' + image.pic;
          if(realEstate.id == image.realEstate.id){
            realEstate.image = image;
          }
        }
      }
      this.imagesAdded = true;
    });
  }

  showRealEstate(realEstateId: string){
    this.selectedRealEstateEvent.emit(realEstateId);
  }

}
