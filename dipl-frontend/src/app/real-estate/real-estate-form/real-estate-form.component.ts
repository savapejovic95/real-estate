import { Component, OnInit } from '@angular/core';
import { RealEstate } from 'src/app/model/real-estate';
import { Router } from '@angular/router';
import { RealEstateService } from 'src/app/service/real-estates.service';

@Component({
  selector: 'app-real-estate-form',
  templateUrl: './real-estate-form.component.html',
  styleUrls: ['./real-estate-form.component.css']
})
export class RealEstateFormComponent implements OnInit {

  realEstate: RealEstate;

  constructor(
    private router: Router,
    private realEstateService: RealEstateService
  ) { 
    this.realEstate = new RealEstate();
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.realEstateService.save(this.realEstate).subscribe(result => this.gotoRealEstatesList());
  }

  gotoRealEstatesList() {
    this.router.navigate(['/all']);
  }

}
