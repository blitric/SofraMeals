import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddMealService {

 params = new HttpParams();

  constructor(private http:HttpClient) { }

  public addMeal(mealId):Observable<any> {
    return this.http.post<any>('/server/addmeal', mealId);
   }

   
}

