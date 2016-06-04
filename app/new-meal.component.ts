import {Component, EventEmitter} from 'angular2/core';
import {Meal} from './meal.model';

@Component({
  selector: 'new-meal',
  outputs: ['onSubmitNewMeal'],
  template: `
  <div class="meal-form">
    <h3>Create Meal:</h3>
    <input placeholder="Food" class="col-sm-3 input-lg" #newFood>
    <input placeholder="Details" class="col-sm-3 input-lg" #newDetails>
    <input placeholder="Calories" class="col-sm-3 input-lg" #newCalories>
  <button (click)="addMeal(newFood, newDetails, newCalories)" class="btn-success btn-lg add-button">Add Meal</button>
  </div>
  `
})
export class NewMealComponent {
  public onSubmitNewMeal: EventEmitter<Meal>;
  constructor(){
    this.onSubmitNewMeal = new EventEmitter();
  }
  addMeal(userFood: HTMLInputElement, userDetails: HTMLInputElement, userCalories: HTMLInputElement){
    var newMeal = new Meal(userFood.value, userDetails.value, parseInt(userCalories.value) )
    this.onSubmitNewMeal.emit(newMeal);
    userFood.value = "";
    userDetails.value = "";
    userCalories.value = "";
  }
}
