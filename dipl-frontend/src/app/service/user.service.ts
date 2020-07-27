import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../model/user';
import { Observable } from 'rxjs/Observable';

const API_URL = 'http://localhost:8080/real-estate/';
 
@Injectable()
export class UserService {
 
  constructor(private http: HttpClient) { }
 
  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(API_URL + 'users');
  }
}