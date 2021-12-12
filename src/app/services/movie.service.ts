import { Injectable } from '@angular/core';
import { API_METHODS } from '../constants/constants';
import { HttpRequestService } from './http-request.service';
import { map, catchError} from "rxjs/operators";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  moviesList: any;
  constructor(private httpRequestService: HttpRequestService) { }
  /**
   * fetch movies from the API
   * @return {Observable} 
   */
  fetchMoviesList(){
    const requestOptions = {
      method: API_METHODS.GET,
      url: environment.serviceAPIs.baseUrl + environment.serviceAPIs.moviesList,
    };
    return this.httpRequestService.request(requestOptions).pipe(
      map((data: any) => {
        this.moviesList = data.body._embedded['viaplay:blocks'][0]._embedded['viaplay:products'];
        return data.body._embedded['viaplay:blocks'][0]._embedded['viaplay:products'];
      }),
      catchError((err) => {
        throw (err);
      })
    );
  }


}
