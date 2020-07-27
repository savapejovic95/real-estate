import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';
import { TokenStorageService } from 'src/app/service/token-storage.service';
 
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
 
  users: User[];
  isAdmin = false;
 
  constructor(private userService: UserService, private tokenStorageService: TokenStorageService) {
  }
 
  ngOnInit() {
    const user = this.tokenStorageService.getUser();
    this.isAdmin = user.roles.includes('ROLE_ADMIN');
    this.userService.findAll().subscribe(data => {
      this.users = data;
    });
  }
}