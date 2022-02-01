import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app-service.service';
import { AuthService } from '../auth.service';
import { SearchService } from '../search/search.service';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.css'],
  providers: [AppService],
})
export class HeadingComponent implements OnInit {
  searchItem: string;
  constructor(
    private authService: AuthService,
    private searchService: SearchService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  login() {
    this.authService.login();
    console.log(this.authService.isAuthenticated());
  }
  logout() {
    this.authService.logout();
  }
  search() {
    this.router.navigate(['/search', this.searchItem]);
  }
}
