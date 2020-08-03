import { Component, OnInit, Input } from '@angular/core';
import { RealEstateService } from 'src/app/service/real-estates.service';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/service/token-storage.service';

@Component({
  selector: 'app-upload-images',
  templateUrl: './upload-images.component.html',
  styleUrls: ['./upload-images.component.css']
})
export class UploadImagesComponent implements OnInit {

  @Input() realEstateId: string;

  imgURL: any;
  receivedImageData: any;
  base64Data: any;
  convertedImages = [];
  public selectedFile;
  isLoggedIn = false;
  userId: string;

  constructor(
    private realEstateService: RealEstateService,
    private router: Router,
    private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.userId = user.id;
    }
  }

  public  onFileChanged(event) {
    console.log(event);
    this.selectedFile = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (event) => {
      this.imgURL = reader.result;
    };
  }

  onUpload() {
    const uploadData = new FormData();
    uploadData.append('image', this.selectedFile, this.selectedFile.name);
    this.realEstateService.saveImage(uploadData, this.realEstateId).subscribe(res => {
        console.log(res);
        this.receivedImageData = res;
        this.base64Data = this.receivedImageData.pic;
        var convertedImage = 'data:image/jpeg;base64,' + this.base64Data;
        this.convertedImages.push(convertedImage);
      },
      err => console.log('Error Occured duringng saving: ' + err)
    );
    this.imgURL = null;
  }

  onFinish() {
    this.router.navigate(['/my-listings/'+this.userId]);
  }

}
