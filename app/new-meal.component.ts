import {Component, EventEmitter} from 'angular2/core';
import {Meal} from './meal.model';

@Component({
  selector: 'new-meal',
  outputs: ['onSubmitNewMeal'],
  template: `
  <div class="meal-form">
    <h3>Create Meal:</h3>
    <input placeholder="Description" class="col-sm-8 input-lg" #newDescription>
    <button (click)="addMeal(newDescription)">Add</button>
  </div>
  `
})
export class NewMealComponent {
  public onSubmitNewMeal: EventEmitter<String>;
  constructor(){
    this.onSubmitNewMeal = new EventEmitter();
  }
  addMeal(userDescription: HTMLInputElement){
    this.onSubmitNewMeal.emit(userDescription.value);
    userDescription.value = "";
  }
}
