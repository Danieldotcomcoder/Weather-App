import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private weatherService: WeatherService) {

  }

  ngOnInit(): void {
      this.weatherService.getWeatherData('ankara, tr')
      .subscribe({
        next: (response: any) => {
          console.log(response);
          
        }
       })
  }

}
