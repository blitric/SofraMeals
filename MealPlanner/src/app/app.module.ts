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
import { RecipeSearchResultsComponent } from './recipe-search-results/recipe-search-results.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


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
    ExtapiComponent,
    RecipeSearchResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
