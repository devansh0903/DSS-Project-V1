import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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

@NgModule({
  declarations: [
    AppComponent,
    ListMovieComponent,
    EditMovieComponent,
    AddMovieComponent,
    MovieDetailsComponent,
    NavbarComponent,
    ReviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, ReactiveFormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
