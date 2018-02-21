import { ProductGridComponent } from './product-grid/product-grid.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

export const routes = [
  { path: '', redirectTo: 'product-grid', pathMatch: 'full' },
  { path: 'product-grid', component: ProductGridComponent },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
