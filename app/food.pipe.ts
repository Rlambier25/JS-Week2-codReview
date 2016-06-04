import {Pipe, PipeTransform} from 'angular2/core';
import {Meal} from './meal.model';

@Pipe({
  name: "healthy",
  pure: false
})
export class foodPipe implements PipeTransform {
  transform(input: Meal[], args) {

    var desiredHealthyState = args[0];
    if(desiredHealthyState === "healthy") {
       return input.filter((meal) => {
        return meal.calories < 450;
       });
    } else if (desiredHealthyState === "notHealthy") {
       return input.filter((meal) => {
        return meal.calories  > 450;
       });
    } else {
      return input;
    }
  }
}
