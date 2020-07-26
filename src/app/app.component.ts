import { Component } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { WeatherbitService } from '../services/weatherbit.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public weatherForecasts?: any[];
  public cities = [
    { name: 'Toronto', value: 'toronto' },
    { name: 'Montreal', value: 'montreal' },
    { name: 'Ottawa', value: 'ottawa' },
    { name: 'Calgary', value: 'calgary' },
    { name: 'Vancouver', value: 'vancouver' },
  ];
  public currentCity = '';

  constructor(private data: WeatherbitService) {}

  public getWeatherUpdatedData($event: any) {
    this.data.getWeatherData($event.value).subscribe((data) => {
      this.weatherForecasts = data.data.slice(0, 5);
      this.currentCity = $event.value;
    });
  }

  public getCurrentWeatherData() {
    this.data.getWeatherData(this.currentCity).subscribe((data) => {
      this.weatherForecasts = data.data.slice(0, 5);
    });
  }
}
