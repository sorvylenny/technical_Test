import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, from, lastValueFrom, map } from 'rxjs';
import { Router } from '@angular/router';
import { RequestMethod } from '../enum/httpsRequest/httpsRequest.enum';

type ApiResponse<T> = T;

@Injectable({
  providedIn: 'root',
})
export class GlobalHttpService {
  constructor(public _http: HttpClient, public _router: Router) { }

  public async makeRequest<T, P>(route: string, payload: P, method: string = RequestMethod.GET): Promise<T> {
    return lastValueFrom(
      from(this.makeHttpRequest<ApiResponse<T>>(route, payload, method)).pipe(
        map((res: ApiResponse<T>) => res),
        catchError((error: HttpErrorResponse) => {
          console.error('Error:', error);
          throw error;
        })
      )
    );
  }
  public async makeHttpRequest<T>(
    url: string,
    options: unknown = {},
    method: string = RequestMethod.GET,
  ): Promise<T> {
    const requestOptions: object = { body: options };
    return lastValueFrom(
      this._http.request<T>(method, url, requestOptions).pipe(
        map(response => response as T)
      )
    );
  }
}
