import { Component, OnInit, Input } from '@angular/core';
import { RealEstate } from 'src/app/model/real-estate';
import { RealEstateService } from 'src/app/service/real-estates.service';
import { Image } from 'src/app/model/image';
import { Router, ActivatedRoute } from '@angular/router';
import { DeleteDialogComponent } from 'src/app/dialog/delete-dialog/delete-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-real-estate-list',
  templateUrl: './real-estate-list.component.html',
  styleUrls: ['./real-estate-list.component.css']
})
export class RealEstateListComponent implements OnInit {

  @Input() realEstates: RealEstate[];
  images: Image[];
  imagesAdded: boolean;
  currentUserId: string;

  constructor(private realEstateService: RealEstateService, 
    private router: Router, 
    private route: ActivatedRoute,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.imagesAdded = false;
    this.route.params.subscribe(params => {
      this.currentUserId = params['userId'];
      if (this.currentUserId && this.currentUserId !== '0') {
        this.realEstateService.findRealEstatesFromUser(this.currentUserId).subscribe(data => {
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
        realEstate.images = [];
        for (var image of this.images) {
          image.convertedImage = 'data:image/jpeg;base64,' + image.pic;
          if(realEstate.id == image.realEstate.id){
            realEstate.images.push(image);
          }
        }
      }
      this.imagesAdded = true;
    });
  }

  showRealEstate(realEstateId: string){
    this.router.navigate(['/real-estate/'+realEstateId]);
  }

  editRealEstate(realEstateId: string){
    this.router.navigate(['/edit-real-estate/'+realEstateId]);
  }

  deleteRealEstate(realEstateId: string){
    const dialogRef = this.dialog.open(DeleteDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if(result == "delete"){
        this.realEstateService.deleteRealEstate(realEstateId).subscribe(res => console.log(res));
        window.location.reload();
      }
    });
  }

}
