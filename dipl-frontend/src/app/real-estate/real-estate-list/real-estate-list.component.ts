import { Component, OnInit, Input } from '@angular/core';
import { RealEstate } from 'src/app/model/real-estate';
import { RealEstateService } from 'src/app/service/real-estates.service';

@Component({
  selector: 'app-real-estate-list',
  templateUrl: './real-estate-list.component.html',
  styleUrls: ['./real-estate-list.component.css']
})
export class RealEstateListComponent implements OnInit {

  @Input() realEstates: RealEstate[];

  constructor(private realEstateService: RealEstateService) { }

  ngOnInit() {
    this.realEstateService.findAllRealEstates().subscribe(data => {
      this.realEstates = data;
      for (var realEstate of this.realEstates) {
        this.realEstateService.findImageByRealEstateId(realEstate.id).subscribe(res => {
            console.log(res);
            var receivedImageData : any;
            receivedImageData = res;
            var base64Data = receivedImageData.pic;
            realEstate.convertedImage = 'data:image/jpeg;base64,' + base64Data; },
          err => console.log('Error Occured duringng saving: ' + err)
        );
      }
    });
  }

}
