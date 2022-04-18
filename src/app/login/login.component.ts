import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {MovieserviceService} from '../services/movieservice.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username : string = "angular";
  password : string = "angular";
  loginForm: FormGroup = this.formBuilder.group({});
  constructor(private route: Router, private formBuilder:FormBuilder, movieService:MovieserviceService) { }
  user? : string;
  pass? : string;
  ngOnInit(): void {

    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['',Validators.required]
    })
  }

  onLogin(){
    this.user=this.loginForm.get('username')?.value;
    this.pass=this.loginForm.get('password')?.value;
    
    if (this.user == this.username && this.pass == this.password){
      // this.route.navigate(['']);
      this.route.navigate(['list-movie']);
    }
    else{
      alert("Wrong Password or Wrong Username")
    }
  }
}
