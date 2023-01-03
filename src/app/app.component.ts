import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { Current } from './models/weather.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private weatherService: WeatherService) {

  }

  weatherData?: Current;

  ngOnInit(): void {
      this.weatherService.getWeatherData('Beqaa', 'No')
      .subscribe({
        next: (response: any) => {
          this.weatherData = response;
          console.log(response);
          
        }
       })
  }

}
