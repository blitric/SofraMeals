import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { IntroparagraphComponent } from './introparagraph/introparagraph.component';
import { ButtongradientComponent } from './buttongradient/buttongradient.component';
import { ImagesrowComponent } from './imagesrow/imagesrow.component';
import { HomeComponent } from './home/home.component';
import { FoodComponent } from './food/food.component';
import { FoodService } from './services/food.service';
import {HttpClientModule} from '@angular/common/http';
import { ExtapiService } from './services/extapi.service';
import { ExtapiComponent } from './extapi/extapi.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SearchbarComponent,
    IntroparagraphComponent,
    ButtongradientComponent,
    ImagesrowComponent,
    HomeComponent,
    FoodComponent,
    ExtapiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
