import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class DashboardComponent implements OnInit {

  username = '';

  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {

    if (!this.auth.isLoggedIn()) {
      this.router.navigate(['/']);
      return;
    }

    this.username = this.auth.getUser();
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/']);
  }
}