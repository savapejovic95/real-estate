import { Component, OnInit, Input } from '@angular/core';
import { RealEstate } from 'src/app/model/real-estate';
import { RealEstateService } from 'src/app/service/real-estates.service';
import { Image } from 'src/app/model/image';

@Component({
  selector: 'app-real-estate-view',
  templateUrl: './real-estate-view.component.html',
  styleUrls: ['./real-estate-view.component.css']
})
export class RealEstateViewComponent implements OnInit {

  @Input() realEstateId: string;
  realEstate : RealEstate;
  images: Image[];
  imagesAdded: boolean;

  constructor(private realEstateService: RealEstateService) { }

  ngOnInit(): void {
    if(this.realEstateId == null){
      return;
    }
    this.imagesAdded = false;
    this.realEstateService.findRealEstateById(this.realEstateId).subscribe(data => {
      this.realEstate = data;
      this.populateImage();
    });
  }

  populateImage(){
    this.realEstateService.getAllImages().subscribe(data => {
      this.images = data;
      for (var image of this.images) {
        image.convertedImage = 'data:image/jpeg;base64,' + image.pic;
        if(this.realEstate.id == image.realEstate.id){
          this.realEstate.image = image;
        }
      }
      this.imagesAdded = true;
    });
  }

}
