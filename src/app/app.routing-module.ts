import { NgModule } from '@angular/core';
import { ProductGridComponent } from './products/product-grid/product-grid.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'product-grid', pathMatch: 'full' },
  { path: 'product-grid', component: ProductGridComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
