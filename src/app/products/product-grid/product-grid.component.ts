import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductsService } from './service/products.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.scss']
})
export class ProductGridComponent implements OnInit, OnDestroy {
  productItems: Object;
  headerText = 'Our products list:';
  selectedItem = null;
  productSub: Subscription;
  isLoading = false;

  constructor(private productsService: ProductsService) {
  }

  ngOnInit() {
    this.fetchItems();
  }

  ngOnDestroy(): void {
    this.productSub.unsubscribe();
  }

  fetchItems() {
    this.isLoading = true;
    this.productSub = this.productsService.getProducts()
      .subscribe(items => {
        this.productItems = items;
        this.isLoading = false;
      });
  }

  selectItemHandler(item) {
    this.selectedItem = item;
  }

  resetSelectedItem(reset) {
    if (reset) {
      this.selectedItem = null;
    }
  }
}
