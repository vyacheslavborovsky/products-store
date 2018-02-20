import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing-module';
import { BrowserModule } from '@angular/platform-browser';
import { CustomMaterialModule } from './shared/modules/custom-material.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { HttpService } from './shared/services/http.service';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgModule } from '@angular/core';
import { ProductCardComponent } from './products/product-card/product-card.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { ProductGridComponent } from './products/product-grid/product-grid.component';
import { ProductsService } from './products/product-grid/service/products.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    ProductGridComponent,
    ProductCardComponent,
    ProductDetailsComponent,
    AppComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    BrowserModule,
    HttpModule,
    HttpClientModule,
    InfiniteScrollModule,
    CustomMaterialModule
  ],
  providers: [
    HttpService,
    ProductsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
