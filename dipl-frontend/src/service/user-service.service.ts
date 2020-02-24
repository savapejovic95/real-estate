import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../model/user';
import { Observable } from 'rxjs/Observable';
 
@Injectable()
export class UserService {
 
  private usersUrl: string;
  private addUserUrl: string;
 
  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/real-estate/users';
    this.addUserUrl = 'http://localhost:8080/real-estate/add-user';
  }
 
  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }
 
  public save(user: User) {
    //return this.http.post<User>(this.addUserUrl, user);
    return this.http.post<User>(
      this.addUserUrl, user,
      {
        headers: new HttpHeaders({
             'Content-Type':  'application/json',
           })
      }
  )
  }
}