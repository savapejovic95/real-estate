import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RealEstate } from '../model/real-estate';
import { Observable } from 'rxjs/Observable';
import { City } from '../model/city';
import { CityPart } from '../model/city-part';
 
@Injectable()
export class RealEstateService {
 
  private realEstatesUrl: string;

  constructor(private http: HttpClient) {
    this.realEstatesUrl = 'http://localhost:8080/real-estate/';
  }
 
  public findAllRealEstates(): Observable<RealEstate[]> {
    return this.http.get<RealEstate[]>(this.realEstatesUrl + 'all');
  }
 
  public saveRealEstate(realEstate: RealEstate) {
    return this.http.post<RealEstate>(
      this.realEstatesUrl + 'add', realEstate,
      {
        headers: new HttpHeaders({
             'Content-Type':  'application/json',
           })
      }
  )
  }

  public findAllCities(): Observable<City[]> {
    return this.http.get<City[]>(this.realEstatesUrl + 'cities');
  }

  public findAllCityParts(): Observable<CityPart[]> {
    return this.http.get<CityPart[]>(this.realEstatesUrl + 'city-parts');
  }
}