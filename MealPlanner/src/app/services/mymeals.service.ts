import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MymealsService {

  

  constructor(private http:HttpClient) { }

getMyMeals() {
  
  return this.http.get('/server/mymeals');
}
}




