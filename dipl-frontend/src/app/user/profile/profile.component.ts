import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../../service/token-storage.service';
import { MatDialog } from '@angular/material/dialog';
import { DeleteUserDialogComponent } from 'src/app/dialog/delete-user-dialog/delete-user-dialog.component';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  currentUser: any;

  constructor(private token: TokenStorageService, 
    public dialog: MatDialog, 
    private authService: AuthService, 
    private router: Router) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
  }

  editProfile() {
    
  }

  deleteAccount() {
    const dialogRef = this.dialog.open(DeleteUserDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if(result == "delete"){
        this.authService.delete(this.currentUser.id).subscribe(res => console.log(res));
        this.token.signOut();
        this.router.navigate(['/']).then(() => {
          window.location.reload();
        })
      }
    });
  }

}