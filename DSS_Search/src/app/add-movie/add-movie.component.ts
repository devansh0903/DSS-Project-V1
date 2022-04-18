import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {
  checkoutForm = this.formBuilder.group({
    title: '',
    movieDesc: '',
    releaseYear: '',
    duration: '',
    rating: ''
  });
  constructor(private route: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  OnSubmit(){
    window.alert("Movie is added");
  }

}
