import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import {
  catchError,
  tap,
  map,
  concatAll,
  mergeAll,
  mergeMap,
  switchMap,
} from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherbitService {
  private channels: any[];

  constructor(public http: HttpClient) {}

  public getWeatherData(city: string) {
    const url = `https://api.weatherbit.io/v2.0/forecast/daily?city=${city},CA&key=371d4e84f04f4e6eafe38174f3de11e5`;

    return Observable.create((observer) => {
      this.http.get(url).subscribe(
        (res) => {
          observer.next(res);
        },
        (err) => {
          console.log('Error occured');
          observer.error(err);
        }
      );
    });
  }
}
