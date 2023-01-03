import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { WeatherData } from '../models/weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor( private http: HttpClient) {}

    getWeatherData(cityName: string): Observable<WeatherData>{
      return this.http.get<WeatherData>(environment.weatherApiBaseUrl+cityName, {
        headers: new HttpHeaders()
        .set('XRapidAPIKey', '03518c50f0mshb2f93a5c3fbb56fp1a5e6ajsn175d3c928506')
        .set('X-RapidAPI-Host','aerisweather1.p.rapidapi.com'),
      });
     }
   
}
