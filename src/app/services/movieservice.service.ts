import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Movie} from "../model/moviemodel";
@Injectable({
  providedIn: 'root'
})
export class MovieserviceService {

  constructor(private httpClient:HttpClient) { }

  baseUrl: string = 'http://localhost:5000/api/Movie';

  public getMovies(){
    return this.httpClient.get<Movie[]>(this.baseUrl);
  }
  public getMovieById(id:number){
    return this.httpClient.get<Movie>(this.baseUrl+'/GetMovieByID/'+ id);
  }

  public createMovie(movie:Movie){
    return this.httpClient.post(this.baseUrl, movie);
  }
  public deleteMovie(id?: number){
    return this.httpClient.delete(this.baseUrl + '?id=' + id );
  }
  public updateMovie(movie:Movie){
    return this.httpClient.put<Movie>(this.baseUrl + '?id=' + movie.movieId , movie);
  }




}




