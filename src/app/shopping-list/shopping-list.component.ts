import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
    new Ingredient('Potatoes', 15),
    new Ingredient('Onions', 8),
  ];

  handleAddIngredient(ingredient: Ingredient) {
    if (this.ingredients.some(({name}) => name.toLowerCase() === ingredient.name.toLowerCase())) {
      this.ingredients = this.ingredients.map(({name, amount}) => {
        if (name.toLowerCase() === ingredient.name.toLowerCase()) {
          return {
            name,
            amount: amount + ingredient.amount,
          }
        }
        return {name, amount};
      })
      return;
    }    
    this.ingredients.push(ingredient);
  }

  constructor() { };

  ngOnInit() {
  }
}
