import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class RemoveMealService {

  queryParams = new HttpParams();

  constructor(private http:HttpClient) { }

  public removeMeal(mealId):Observable<any> {
    this.queryParams = this.queryParams.set("mealId", mealId);
    return this.http.delete('/server/removemeal', {params:this.queryParams});
  }


}



