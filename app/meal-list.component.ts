import { Component, EventEmitter } from 'angular2/core';
import { MealComponent } from './meal.component';
import { Meal } from './meal.model';
import { EditMealDetailsComponent } from './edit-meal-details.component';
import { NewMealComponent } from './new-meal.component';
import {DonePipe} from './done.pipe';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  pipes: [DonePipe],
  directives: [MealComponent, EditMealDetailsComponent, NewMealComponent],
  template: `
  <select (change)="onChange($event.target.value)" class="filter">
  <option value="all">Show All</option>
  <option value="done">Show Done</option>
  <option value="notDone" selected="selected">Show Not Done</option>
</select>
  <meal-display *ngFor="#currentMeal of mealList | done:filterDone"
    (click)="mealClicked(currentMeal)"
    [class.selected]="currentMeal === selectedMeal"
    [meal]="currentMeal">
  </meal-display>
  <edit-meal-details *ngIf="selectedMeal" [meal]="selectedMeal"></edit-meal-details>
  <new-meal (onSubmitNewMeal)="createMeal($event)"></new-meal>
  `
})
export class MealListComponent {
  public mealList: Meal[];
  public onMealSelect: EventEmitter<Meal>;
  public selectedMeal: Meal;
  public filterDone: string = "notDone";
  constructor() {
    this.onMealSelect = new EventEmitter();
  }
  mealClicked(clickedMeal: Meal): void {
    this.selectedMeal = clickedMeal;
    this.onMealSelect.emit(clickedMeal);
  }
  createMeal(description: string): void {
    this.mealList.push(
      new Meal(description, this.mealList.length)
    );
  }
  onChange(filterOption) {
    this.filterDone = filterOption;
  }
}
