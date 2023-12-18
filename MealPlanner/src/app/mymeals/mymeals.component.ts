import { Component, OnInit } from '@angular/core';
import { MymealsService } from '../services/mymeals.service';

@Component({
  selector: 'app-mymeals',
  templateUrl: './mymeals.component.html',
  styleUrls: ['./mymeals.component.css']
})
export class MymealsComponent implements OnInit {
public myMeals;
public type;

  constructor(private myMealsService: MymealsService) {}
   
  ngOnInit(): void {
  this.getMyMeals();
}

getMyMeals() {
  this.myMealsService.getMyMeals().subscribe(
    data => {this.myMeals = data;},
    err => console.error(err),
    () => console.log('meals loaded') 
  );

}

}







  
