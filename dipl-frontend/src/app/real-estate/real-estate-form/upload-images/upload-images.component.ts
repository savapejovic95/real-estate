import { Component, OnInit, Input } from '@angular/core';
import { RealEstateService } from 'src/app/service/real-estates.service';

@Component({
  selector: 'app-upload-images',
  templateUrl: './upload-images.component.html',
  styleUrls: ['./upload-images.component.css']
})
export class UploadImagesComponent implements OnInit {

  @Input() realEstateId: string;

  constructor(private realEstateService: RealEstateService) { }

  title = 'ImageUploaderFrontEnd';

  public selectedFile;
  public event1;
  imgURL: any;
  receivedImageData: any;
  base64Data: any;
  convertedImage: any;

  ngOnInit(): void {
    console.log("UPLOAD IMAGES COMPONENT: " + this.realEstateId);
  }

  public  onFileChanged(event) {
    console.log(event);
    this.selectedFile = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (event2) => {
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
        this.convertedImage = 'data:image/jpeg;base64,' + this.base64Data; },
      err => console.log('Error Occured duringng saving: ' + err)
    );
  }

}
