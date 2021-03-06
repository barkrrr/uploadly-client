import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  user: any;
  anon: boolean;
  loading = true;
  isLogin = true;
  isSignup = false;

  constructor(
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit() {
    this.user = this.authService.getUser();
    this.authService.userChange$.subscribe((user) => {
      this.user = user;
      this.anon = !user;
    });
    this.loading = false;
  }

  handleLoginClick() {
    this.isLogin = true;
    this.isSignup = false;
  }

  handleSignupClick() {
    this.isLogin = false;
    this.isSignup = true;
  }
  

}
