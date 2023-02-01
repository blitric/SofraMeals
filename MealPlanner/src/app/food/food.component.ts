import { Component, OnInit } from '@angular/core';
import * as internal from 'stream';
import { FoodService } from '../services/food.service';

@Component({
  selector: 'food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {
  public food;

  constructor(private foodService: FoodService) {}

  ngOnInit(): void {
    this.getFood();
   
  }

  getFood() {
    this.foodService.getFood().subscribe(
      data => {this.food = data},
      err => console.error(err),
      () => console.log('food loaded')
    );
  }

}




