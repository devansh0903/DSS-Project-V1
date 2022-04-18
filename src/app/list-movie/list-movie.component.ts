import { Component, OnInit } from '@angular/core';
import {movies} from '../movie';
import { Router} from '@angular/router';
@Component({
  selector: 'app-list-movie',
  templateUrl: './list-movie.component.html',
  styleUrls: ['./list-movie.component.css']
})
export class ListMovieComponent implements OnInit {
  movie =  movies;
  constructor(private route: Router) { }

  ngOnInit(): void {
  }
  addMov(): void {
    this.route.navigate(['add-movie']);
  }
  editMov(): void {
    this.route.navigate(['edit-movie']);
  }
}
