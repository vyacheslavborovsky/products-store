import { CommonModule } from '@angular/common';
import { CustomMaterialModule } from '../shared/modules/custom-material.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgModule } from '@angular/core';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductGridComponent } from './product-grid/product-grid.component';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsService } from './product-grid/service/products.service';

@NgModule({
  declarations: [
    ProductGridComponent,
    ProductCardComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    CustomMaterialModule,
    InfiniteScrollModule,
    ProductsRoutingModule
  ],
  providers: [
    ProductsService
  ]
})

export class ProductsModule { }
