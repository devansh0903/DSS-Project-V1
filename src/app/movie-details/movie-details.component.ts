import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Movie} from '../model/moviemodel';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movie: Movie | undefined;
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    
  

  }

}
