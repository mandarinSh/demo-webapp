import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Pet } from './pet';

@Injectable({
  providedIn: 'root'
})
export class PetsService {

  private apiURL = 'https://ancient-journey-63841.herokuapp.com';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getDogs(): Observable<Pet[]> {
    return this.http.get<Pet[]>(`${this.apiURL}/getDogs`)
      .pipe(
        map((response) => {
          console.log(response);
          return response;
        }
        )
      );
  }
}
