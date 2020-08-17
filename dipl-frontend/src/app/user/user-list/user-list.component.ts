import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';
import { TokenStorageService } from 'src/app/service/token-storage.service';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';
import { DeleteUserDialogComponent } from 'src/app/dialog/delete-user-dialog/delete-user-dialog.component';
 
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
 
  users: User[];
  isAdmin = false;
 
  constructor(private userService: UserService, 
    private token: TokenStorageService, 
    public dialog: MatDialog, 
    private authService: AuthService, 
    private router: Router) {
  }
 
  ngOnInit() {
    const user = this.token.getUser();
    this.isAdmin = user.roles.includes('ROLE_ADMIN');
    this.userService.findAll().subscribe(data => {
      this.users = data;
    });
  }

  deleteAccount(userId: string) {
    const dialogRef = this.dialog.open(DeleteUserDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if(result == "delete"){
        this.authService.delete(userId).subscribe(res => console.log(res));
        window.location.reload();
      }
    });
  }
}