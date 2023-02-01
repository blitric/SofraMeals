import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http:HttpClient) { }

  getFood() {
    return this.http.get('/server/api/food');
  }

  getFoodItem(id: number) {
    return this.http.get('/server/api/food/' + id);
  }

  }

