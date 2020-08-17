import { Component, OnInit, Input } from '@angular/core';
import { RealEstate } from 'src/app/model/real-estate';
import { RealEstateService } from 'src/app/service/real-estates.service';
import { Image } from 'src/app/model/image';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-real-estate-view',
  templateUrl: './real-estate-view.component.html',
  styleUrls: ['./real-estate-view.component.css']
})
export class RealEstateViewComponent implements OnInit {

  realEstateId: string;
  realEstate : RealEstate;
  images: Image[];
  imagesAdded: boolean;
  isFirst = true;
  isLast = false;
  currentImageUrl: string;
  currImageIndex = 0;
  showPhoneNumber = false;

  constructor(private realEstateService: RealEstateService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const realEstateId = params['realEstateId'];
      if (realEstateId && realEstateId !== '0') {
          this.realEstateId = params['realEstateId'];
      }
    });
    if(this.realEstateId == null){
      return;
    }
    this.imagesAdded = false;
    this.realEstateService.findRealEstateById(this.realEstateId).subscribe(data => {
      this.realEstate = data;
      this.realEstate.images = [];
      this.populateImage();
    });
  }

  populateImage(){
    this.realEstateService.getAllImages().subscribe(data => {
      this.images = data;
      for (var image of this.images) {
        image.convertedImage = 'data:image/jpeg;base64,' + image.pic;
        if(this.realEstate.id == image.realEstate.id){
          this.realEstate.images.push(image);
        }
      }
      this.currentImageUrl = this.realEstate.images[0].convertedImage;
      if(this.realEstate.images.length == 1){
        this.isLast = true;
      }
      this.imagesAdded = true;
    });
  }

  previousPic(){
    this.isLast = false;
    this.currImageIndex--;
    this.currentImageUrl = this.realEstate.images[this.currImageIndex].convertedImage;
    if(this.currImageIndex == 0){
      this.isFirst = true;
    }
  }

  nextPic(){
    this.isFirst = false;
    this.currImageIndex++;
    this.currentImageUrl = this.realEstate.images[this.currImageIndex].convertedImage;
    if(this.currImageIndex == this.realEstate.images.length-1){
      this.isLast = true;
    }
  }

  onShowNumber() {
    this.showPhoneNumber = true;
  }

}
