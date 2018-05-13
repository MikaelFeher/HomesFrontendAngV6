import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { 
    console.log("dataService connected...");
  }

  getHomes() {
    return this.http.get('//localhost:3000/homes');
  }

}