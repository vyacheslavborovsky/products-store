import {
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCommonModule,
  MatGridListModule,
  MatIconModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatTooltipModule
} from '@angular/material';

import { NgModule } from '@angular/core';

const MATERIAL_MODULES = [
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCommonModule,
  MatGridListModule,
  MatIconModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatTooltipModule
]

@NgModule({
  imports: MATERIAL_MODULES,
  exports: MATERIAL_MODULES
})
export class CustomMaterialModule { }
