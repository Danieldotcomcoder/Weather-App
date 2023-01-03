import { NgIf } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Current } from '../models/weather.model';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor( private http: HttpClient) {}

    getWeatherData(cityName: string, airQuality: string): Observable<Current>{
      return this.http.get<Current>('https://api.weatherapi.com/v1/current.json?key=d736978a1a86464aa8a82407230301&q='+ cityName + '&aqi=' + airQuality)
      
      };
     }
   

