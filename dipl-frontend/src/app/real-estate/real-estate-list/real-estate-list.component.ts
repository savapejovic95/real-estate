import { Component, OnInit } from '@angular/core';
import { RealEstate } from 'src/app/model/real-estate';
import { RealEstateService } from 'src/app/service/real-estates.service';

@Component({
  selector: 'app-real-estate-list',
  templateUrl: './real-estate-list.component.html',
  styleUrls: ['./real-estate-list.component.css']
})
export class RealEstateListComponent implements OnInit {

  realEstates: RealEstate[];

  constructor(private realEstateService: RealEstateService) { }

  ngOnInit() {
    this.realEstateService.findAll().subscribe(data => {
      this.realEstates = data;
    });
  }

}
