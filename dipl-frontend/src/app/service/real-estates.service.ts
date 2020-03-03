import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RealEstate } from '../model/real-estate';
import { Observable } from 'rxjs/Observable';
 
@Injectable()
export class RealEstateService {
 
  private realEstatesUrl: string;
  private addRealEstatesUrl: string;
 
  constructor(private http: HttpClient) {
    this.realEstatesUrl = 'http://localhost:8080/real-estate/all';
    this.addRealEstatesUrl = 'http://localhost:8080/real-estate/add';
  }
 
  public findAll(): Observable<RealEstate[]> {
    return this.http.get<RealEstate[]>(this.realEstatesUrl);
  }
 
  public save(realEstate: RealEstate) {
    return this.http.post<RealEstate>(
      this.addRealEstatesUrl, realEstate,
      {
        headers: new HttpHeaders({
             'Content-Type':  'application/json',
           })
      }
  )
  }
}