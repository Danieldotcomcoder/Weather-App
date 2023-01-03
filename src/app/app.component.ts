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

  weatherData?: Root;

  ngOnInit(): void {
      this.weatherService.getWeatherData('Lebanon', 'No')
      .subscribe({
        next: (response: any) => {
          this.weatherData = response;
          console.log(this.weatherData);
          
        }
       })
  }

}
