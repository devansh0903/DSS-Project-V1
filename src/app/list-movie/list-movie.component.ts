import { Component, OnInit } from '@angular/core';
import {Movie} from '../model/moviemodel';
import { Router} from '@angular/router';
import { MovieserviceService } from '../services/movieservice.service';

@Component({
  selector: 'app-list-movie',
  templateUrl: './list-movie.component.html',
  styleUrls: ['./list-movie.component.css']
})
export class ListMovieComponent implements OnInit {
  movies: Movie[] = [];
  movieId: string = '';
  filterTerm!: string;
  constructor(private route: Router, private movieService: MovieserviceService) { }

  ngOnInit(): void {
    this.movieService.getMovies().subscribe((movies: Movie[]) => {
      this.movies = movies;
    });
  }
  addMov(): void {
    this.route.navigate(['add-movie']);
  }
  editMov(): void {
    this.route.navigate(['edit-movie']);
  }
  deleteMovie(movie?: Movie): void {
    alert(movie?.movieId);
    this.movieService.deleteMovie(movie?.movieId).subscribe((movie) => {
      this.movies = this.movies.filter(
        (movieItem:any) => movieItem !== movie
      );
    });
  }
}
