import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BrowserModule } from '../../../node_modules/@angular/platform-browser';
import {
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatButtonModule,
  MatDividerModule
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatButtonModule,
    MatDividerModule,
    MatCardModule,
    MatIconModule,
    BrowserAnimationsModule
  ],
  exports: [
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    BrowserAnimationsModule
  ],
  providers: [],
})
export class MaterialModule {}
