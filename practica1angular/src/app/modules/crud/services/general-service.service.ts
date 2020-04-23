import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GeneralServiceService {

  constructor(private http: HttpClient) { }

  public getPrediction(date){
    const y = date.substring(0,4);
    const m = date.substring(5,7);
    const d = date.substring(8,10);
    return this.http.get('https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/753692/'+y+'/'+m+'/'+d);
  }
}
