import { NgModule } from '@angular/core';
import { ProductGridComponent } from './products/product-grid/product-grid.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', loadChildren: './products/products.module#ProductsModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
