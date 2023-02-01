import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, Router } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FoodComponent } from './food/food.component';
import { ExtapiComponent } from './extapi/extapi.component';

const routes: Routes = [
  { path: 'home' , component : HomeComponent},
  { path: 'foods' , component : FoodComponent},
  { path: 'extapi' , component : ExtapiComponent},
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
