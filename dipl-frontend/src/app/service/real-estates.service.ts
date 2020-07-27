import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RealEstate } from '../model/real-estate';
import { Observable } from 'rxjs/Observable';
import { City } from '../model/city';
import { CityPart } from '../model/city-part';
import { Filter } from '../model/filter';
import { Image } from '../model/image';

const REAL_ESTATES_URL = 'http://localhost:8080/real-estate/';
 
@Injectable()
export class RealEstateService {

  constructor(private http: HttpClient) { }
 
  public findAllRealEstates(): Observable<RealEstate[]> {
    return this.http.get<RealEstate[]>(REAL_ESTATES_URL + 'all');
  }
 
  public saveRealEstate(realEstate: RealEstate) {
    return this.http.post<RealEstate>(
      REAL_ESTATES_URL + 'add', realEstate,
      {
        headers: new HttpHeaders({
             'Content-Type':  'application/json',
           })
      }
    )
  }

  public findRealEstateById(realEstateId: string): Observable<RealEstate> {
    return this.http.get<RealEstate>(REAL_ESTATES_URL + 'real-estate?id=' + realEstateId);
  }

  public findRealEstatesFromUser(userId: string): Observable<RealEstate[]> {
    return this.http.get<RealEstate[]>(REAL_ESTATES_URL + 'all?userId=' + userId);
  }

  public saveImage(uploadData: FormData, realEstateId: string) {
    return this.http.post(
      REAL_ESTATES_URL + 'upload-image?realEstateId=' + realEstateId, uploadData)
  }

  public getAllImages(): Observable<Image[]> {
    return this.http.get<Image[]>(REAL_ESTATES_URL + 'all-images');
  }

  public findImageByRealEstateId(realEstateId: string) {
    return this.http.get(REAL_ESTATES_URL + 'image?realEstateId=' + realEstateId);
  }

  public findAllCities(): Observable<City[]> {
    return this.http.get<City[]>(REAL_ESTATES_URL + 'cities');
  }

  public findAllCityParts(): Observable<CityPart[]> {
    return this.http.get<CityPart[]>(REAL_ESTATES_URL + 'city-parts');
  }

  public findCityPartsByCityId(cityId: string): Observable<CityPart[]> {
    return this.http.get<CityPart[]>(REAL_ESTATES_URL + 'city-parts?cityId=' + cityId);
  }

  public findCityPartById(cityPartId: string): Observable<CityPart> {
    return this.http.get<CityPart>(REAL_ESTATES_URL + 'city-part?id=' + cityPartId);
  }

  public findFilteredRealEstates(filter: Filter): Observable<RealEstate[]> {
    var url = "?";
    for(var key in filter){
      url += key + "=" + filter[key] + "&";
    }
    url = url.substring(0, url.length - 1);
    return this.http.get<RealEstate[]>(REAL_ESTATES_URL + 'filter' + url);
  }
}