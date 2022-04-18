import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {MovieserviceService} from '../services/movieservice.service';
@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit {

  updateMovieForm: FormGroup = this.formBuilder.group({});
  constructor(private route: Router, private formBuilder: FormBuilder, private movieService:MovieserviceService) { }


  ngOnInit(): void {
      this.updateMovieForm = this.formBuilder.group({
      movieId: ['', Validators.required],
      movieTitle: ['', Validators.required],
      movieDesc: ['',Validators.required],
      releaseYear: ['',Validators.required,Validators.max(9999)],
      duration: ['',Validators.required,Validators.min(0),Validators.max(999)],
      genres: ['',Validators.required],
      actor: ['', Validators.required]
      });
    
      let movid = localStorage.getItem('editmovieId');
      if (+movid! > 0) {
      this.movieService.getMovieById(+movid!).subscribe((data:any) => {
        this.updateMovieForm.patchValue(data);
      })
      
    }

  }
  onUpdate() {
    console.log('Updating record.');
    this.movieService.updateMovie(this.updateMovieForm.value).subscribe((data:any) => {
        alert("record updated");
        this.route.navigate(['list-movie']);
      },
      error => {
        alert(error);
      });
  }
}
