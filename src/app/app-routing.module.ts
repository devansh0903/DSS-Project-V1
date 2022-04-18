import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListMovieComponent } from './list-movie/list-movie.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { CommonModule } from '@angular/common';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [{path: '', component: LoginComponent  , pathMatch: 'full'},
{path: 'add-movie', component: AddMovieComponent},
{path: 'edit-movie', component:EditMovieComponent},
{path: 'movie/:movieId' , component: MovieDetailsComponent},
{path: 'detail-movie', component: MovieDetailsComponent},
{path: 'list-movie', component: ListMovieComponent}];

@NgModule({
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
