import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { Current, Root } from './models/weather.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private weatherService: WeatherService) {

  }
  cityName: string = 'London';
  weatherData?: Root;

  ngOnInit(): void {

    this.getWeatherData(this.cityName)
  }


  onSubmit() {
    this.getWeatherData(this.cityName)
    this.cityName = '';
  }
  private getWeatherData(cityName: string) {
    this.weatherService.getWeatherData(cityName, 'Yes')
      .subscribe({
        next: (response: any) => {
          this.weatherData = response;
          console.log(this.weatherData);

        }
      })
  }
}
