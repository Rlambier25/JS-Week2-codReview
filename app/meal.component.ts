import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
    selector: 'meal-display',
    inputs: ['meal'],

  template: `
  <h3 (click)= "select()">{{ meal.food}}</h3>
  <div>
    <p>{{meal.calories}}</p>
    <p>{{ meal.details }}</p>
  </div>
  `
})
export class MealComponent {
  public meal: Meal;
  toggleHealthy(setState: number){
    this.meal.calories = setState;
  };
};
