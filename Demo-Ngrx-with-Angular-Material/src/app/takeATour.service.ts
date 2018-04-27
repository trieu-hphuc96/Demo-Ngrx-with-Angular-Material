import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { TakeATour } from './mock-takeATour';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class TakeATourService {

  private takeAToursUrl = 'api/takeATours';  // URL to web api

  constructor(
    private http: HttpClient
) { }

  /** GET takeATours from the server */
  getTakeAToures (): Observable<TakeATour[]> {
    return this.http.get<TakeATour[]>(this.takeAToursUrl)
  }

  /** GET takeATour by id. Return `undefined` when id not found */
  getTakeATourNo404<Data>(id: number): Observable<TakeATour> {
    const url = `${this.takeAToursUrl}/?id=${id}`;
    return this.http.get<TakeATour[]>(url)
      .pipe(
        map(takeATours => takeATours[0]) // returns a {0|1} element array
      );
  }

  /** GET takeATour by id. Will 404 if id not found */
  getTakeATour(id: number): Observable<TakeATour> {
    const url = `${this.takeAToursUrl}/${id}`;
    return this.http.get<TakeATour>(url)
  }

  /* GET takeATours whose name contains search term */
  searchTakeAToures(term: string): Observable<TakeATour[]> {
    if (!term.trim()) {
      // if not search term, return empty takeATour array.
      return of([]);
    }
    return this.http.get<TakeATour[]>(`api/takeATours/?name=${term}`)
  }

  //////// Save methods //////////

  /** POST: add a new takeATour to the server */
  addTakeATour (takeATour: TakeATour): Observable<TakeATour> {
    return this.http.post<TakeATour>(this.takeAToursUrl, takeATour, httpOptions)
  }

  /** DELETE: delete the takeATour from the server */
  deleteTakeATour (takeATour: TakeATour | number): Observable<TakeATour> {
    const index = typeof takeATour === 'number' ? takeATour : takeATour.index;
    const url = `${this.takeAToursUrl}/${index}`;

    return this.http.delete<TakeATour>(url, httpOptions)
  }

  /** PUT: update the takeATour on the server */
  updateTakeATour (takeATour: TakeATour): Observable<any> {
    return this.http.put(this.takeAToursUrl, takeATour, httpOptions)  
  }
}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/