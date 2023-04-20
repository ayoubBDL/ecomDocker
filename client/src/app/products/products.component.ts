import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/models';
import { NavigationService } from '../services/navigation.service';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  view: 'grid' | 'list' = 'list';
  sortby: 'default' | 'htl' | 'lth' = 'default';
  products: Product[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private navigationService: NavigationService,
    private utilityService: UtilityService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params: any) => {
      let category = params.category;
      let subcategory = params.subcategory;

      if (category && subcategory)
        this.navigationService
          .getProducts(category, subcategory, 10)
          .subscribe((res: any) => {
            this.products = res;
          });
    });
  }

  sortByPrice(sortKey: string) {
    this.products.sort((a, b) => {
      if (sortKey === 'default') {
        return a.id > b.id ? 1 : -1;
      }
      return (
        (sortKey === 'htl' ? 1 : -1) *
        (this.utilityService.applyDiscount(a.price/100, a.offer.discount/100) >
        this.utilityService.applyDiscount(b.price/100, b.offer.discount/100)
          ? -1
          : 1)
      );
    });
  }
}
