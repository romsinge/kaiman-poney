import { NgModule } from '@angular/core';
import {MatSidenavModule, MatButtonModule, MatToolbarModule, MatIconModule, MatDividerModule, MatListModule, MatFormFieldModule, MatInputModule, MatSelectModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

const MATERIAL_MODULES = [
  BrowserAnimationsModule,
  MatSidenavModule,
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatDividerModule,
  MatListModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule
]

@NgModule({
  imports: [
    ...MATERIAL_MODULES
  ],
  exports: [
    ...MATERIAL_MODULES
  ],
  declarations: []
})
export class MaterialModule { }
