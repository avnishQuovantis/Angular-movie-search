import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SearchService } from './search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  searchItems;
  subscription: Subscription;
  constructor(
    private searchService: SearchService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.searchItems = this.searchService.searchItem(params['id']);
      console.log(this.searchItems);
    });
  }
  goToItem(item) {
    this.router.navigate([item['catagory'], item['id']]);
  }
}
