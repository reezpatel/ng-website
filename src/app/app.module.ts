import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { MaterialModule } from './Shared/material.module';
import { Routes } from './Shared/routes';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HomeExtrasComponent } from './home-extras/home-extras.component';
import { ProjectsComponent } from './projects/projects.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeExtrasComponent,
    ProjectsComponent
  ],
  imports: [
    Routes,
    BrowserModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
