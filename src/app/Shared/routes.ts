import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './../home/home.component';
import { ProjectsComponent } from './../projects/projects.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {path: '', pathMatch: 'full', redirectTo: 'about'},
      {path: 'about', component: HomeComponent},
      {path: 'project', component: ProjectsComponent}
    ])
  ],
  exports: [
    RouterModule
  ],
  providers: [],
})
export class Routes {}
