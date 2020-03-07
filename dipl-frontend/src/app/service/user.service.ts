import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../model/user';
import { Observable } from 'rxjs/Observable';
 
@Injectable()
export class UserService {
 
  private url: string;
 
  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8080/real-estate/';
  }
 
  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.url + 'users');
  }

  public findUserById(userId: string): Observable<User> {
    return this.http.get<User>(this.url + 'user?id=' + userId);
  }
 
  public save(user: User) {
    return this.http.post<User>(
      this.url+'add-user', user,
      {
        headers: new HttpHeaders({
             'Content-Type':  'application/json',
           })
      }
  )
  }
}