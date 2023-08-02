import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
  encapsulation: ViewEncapsulation.None, // changing the default behavior of emulated shadow DOM to none
})
export class ShoppingEditComponent {
  //the prop is passed between [] and accessed in the child component with @Input('alias')
  @Input() ingredient: { name: string, amount: number }; 
  @Output() addIngredientEvent = new EventEmitter<{ name: string, amount: number }>();

  // newIngredientName: string = ''; this is need in case of two-way binding, but I am using local ref instead
  newIngredientAmount: number = 0;


  addIngredient(target: HTMLInputElement) {
    this.addIngredientEvent.emit({ name: target.value, amount: this.newIngredientAmount });
    // this.newIngredientName = '';
    this.newIngredientAmount = 0;
  }
  

  constructor() { }

  ngOnInit() {
  }
}
