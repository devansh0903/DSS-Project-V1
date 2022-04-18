import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Movie, movies} from '../movie';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movie: Movie | undefined;
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const movieIdFromFromRoute = Number(routeParams.get('movieId'));
    
    this.movie = movies.find(
      (movie :any) => movie.id === movieIdFromFromRoute
    );

  }

}
