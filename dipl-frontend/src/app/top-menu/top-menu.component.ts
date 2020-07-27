import { Component } from '@angular/core';
import { TokenStorageService } from '../service/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent {
  isLoggedIn = false;
  private roles: string[];
  isAdmin = false;
  isModerator = false;
  username: string;

  constructor(private tokenStorageService: TokenStorageService, private router: Router) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.isAdmin = this.roles.includes('ROLE_ADMIN');
      this.isModerator = this.roles.includes('ROLE_MODERATOR');

      this.username = user.username;
    }
  }

  logout(): void {
    this.tokenStorageService.signOut();
    this.router.navigate(['/']).then(() => {
      window.location.reload();
    })
  }

}
