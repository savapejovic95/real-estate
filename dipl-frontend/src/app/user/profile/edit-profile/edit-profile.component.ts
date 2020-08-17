import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { TokenStorageService } from 'src/app/service/token-storage.service';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  isLoggedIn = false;
  user: User;

  constructor(private router: Router, private token: TokenStorageService, private authService: AuthService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.token.getToken();
    this.user = this.token.getUser();
  }

  goToMyProfile() {
    this.router.navigate(['/profile']);
  }

  onSubmit() {
    console.log(this.user);
    this.authService.updateUser(this.user).subscribe(result => {
      console.log(result);
      this.logout();
    });
  }

  logout(): void {
    this.token.signOut();
    this.router.navigate(['/login']).then(() => {
      window.location.reload();
    })
  }

}
