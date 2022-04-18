import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {MovieserviceService} from '../services/movieservice.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {
  addMovieForm: FormGroup = this.formBuilder.group({});
  constructor(private route: Router, private formBuilder: FormBuilder, private movieService:MovieserviceService) { }

  ngOnInit(): void {
    this.addMovieForm = this.formBuilder.group({
    movieTitle: ['', Validators.required],
    movieDesc: ['',Validators.required],
    releaseYear: ['',Validators.required,Validators.max(9999)],
    duration: ['',Validators.required,Validators.min(0),Validators.max(999)],
    genres: ['',Validators.required],
    actor: ['', Validators.required]
    });
  
    
  
  }

  OnSubmit(){
    
      console.log("Product Details sent to the server!");
      console.log(this.addMovieForm?.value);
      this.movieService.createMovie(this.addMovieForm?.value).subscribe(data => {
        console.log("Data sent to the web api.");
        this.route.navigate(['list-movie']);
      });
    }
  }


