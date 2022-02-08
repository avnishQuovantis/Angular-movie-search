import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AppService } from "../app-service.service";
import { AuthService } from "../auth.service";
import { SearchService } from "../search/search.service";

@Component({
  selector: "app-heading",
  templateUrl: "./heading.component.html",
  styleUrls: ["./heading.component.css"],
  providers: [AppService],
})
export class HeadingComponent implements OnInit {
  isAuthenticated = false;
  searchItem: string;
  dropDown = false;
  constructor(
    private authService: AuthService,
    private searchService: SearchService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.authService.user.subscribe((user) => {
      console.log(user);
      this.isAuthenticated = user ? true : false;
    });
  }
  login() {
    this.router.navigate(["/login"]);
  }
  logout() {
    this.authService.logout();
  }
  search() {
    this.router.navigate(["/search", this.searchItem]);
  }
  openDropDown() {
    this.dropDown = !this.dropDown;
  }
}
