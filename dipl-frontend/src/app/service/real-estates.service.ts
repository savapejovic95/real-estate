import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RealEstate } from '../model/real-estate';
import { Observable } from 'rxjs/Observable';
import { City } from '../model/city';
import { CityPart } from '../model/city-part';
import { Filter } from '../model/filter';
 
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

  public saveImage(uploadData: FormData, realEstateId: string) {
    return this.http.post(
      this.realEstatesUrl + 'upload-image?realEstateId=' + realEstateId, uploadData)
  }

  public findImageByRealEstateId(realEstateId: string) {
    return this.http.get(this.realEstatesUrl + 'image?realEstateId=' + realEstateId);
  }

  public findAllCities(): Observable<City[]> {
    return this.http.get<City[]>(this.realEstatesUrl + 'cities');
  }

  public findAllCityParts(): Observable<CityPart[]> {
    return this.http.get<CityPart[]>(this.realEstatesUrl + 'city-parts');
  }

  public findCityPartsByCityId(cityId: string): Observable<CityPart[]> {
    return this.http.get<CityPart[]>(this.realEstatesUrl + 'city-parts?cityId=' + cityId);
  }

  public findCityPartById(cityPartId: string): Observable<CityPart> {
    return this.http.get<CityPart>(this.realEstatesUrl + 'city-part?id=' + cityPartId);
  }

  public findFilteredRealEstates(filter: Filter): Observable<RealEstate[]> {
    var url = "?";
    for(var key in filter){
      url += key + "=" + filter[key] + "&";
    }
    url = url.substring(0, url.length - 1);
    return this.http.get<RealEstate[]>(this.realEstatesUrl + 'filter' + url);
  }
}