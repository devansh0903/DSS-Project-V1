import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgxStarRatingModule} from 'ngx-star-rating';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListMovieComponent } from './list-movie/list-movie.component';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { ReviewComponent } from './review/review.component';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {FormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ListMovieComponent,
    EditMovieComponent,
    AddMovieComponent,
    MovieDetailsComponent,
    NavbarComponent,
    ReviewComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, ReactiveFormsModule, HttpClientModule,NgxStarRatingModule, Ng2SearchPipeModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
