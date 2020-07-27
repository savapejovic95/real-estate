import { Component, OnInit, Input } from '@angular/core';
import { RealEstate } from 'src/app/model/real-estate';
import { RealEstateService } from 'src/app/service/real-estates.service';
import { Image } from 'src/app/model/image';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-real-estate-list',
  templateUrl: './real-estate-list.component.html',
  styleUrls: ['./real-estate-list.component.css']
})
export class RealEstateListComponent implements OnInit {

  @Input() realEstates: RealEstate[];
  images: Image[];
  imagesAdded: boolean;

  constructor(private realEstateService: RealEstateService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.imagesAdded = false;
    this.route.params.subscribe(params => {
      const userId = params['userId'];
      if (userId && userId !== '0') {
        this.realEstateService.findRealEstatesFromUser(userId).subscribe(data => {
          this.realEstates = data;
          this.populateImages();
        });
      } else {
        this.realEstateService.findAllRealEstates().subscribe(data => {
          this.realEstates = data;
          this.populateImages();
        });
      }
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
    this.router.navigate(['/real-estate/'+realEstateId]);
  }

}
