import { Component, OnInit } from '@angular/core';
import { MymealsService } from '../services/mymeals.service';
import { RemoveMealService } from '../services/remove-meal.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-mymeals',
  templateUrl: './mymeals.component.html',
  styleUrls: ['./mymeals.component.css']
})
export class MymealsComponent implements OnInit {
public myMeals;
public type;

  constructor(private myMealsService: MymealsService, private removeMealService:RemoveMealService, private router:Router) {}
   
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

removeMeal(mealId) {
  this.removeMealService.removeMeal(mealId).subscribe((response:any) => {
    console.log(response);
  });
  
  this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  this.router.navigate(['mymeals']);
}

}






  
