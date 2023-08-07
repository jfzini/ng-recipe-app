import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
  encapsulation: ViewEncapsulation.None, // changing the default behavior of emulated shadow DOM to none
})
export class ShoppingEditComponent {
  //the prop is passed between [] and accessed in the child component with @Input('alias')
  @Input() ingredient: { name: string; amount: number };
  @Output() addIngredientEvent = new EventEmitter<{
    name: string;
    amount: number;
  }>();

  // newIngredientName: string = ''; this is need in case of two-way binding, but I am using local ref instead
  // newIngredientAmount: number = 0;
  @ViewChild('newIngredientAmount', { static: true }) // another way to access the value of the input field
  newIngredientAmount: ElementRef;

  addIngredient(target: HTMLInputElement) {
    this.addIngredientEvent.emit({
      name: target.value,
      amount: Number(this.newIngredientAmount.nativeElement.value), // this is the syntax of ViewChild
    });
    // this.newIngredientName = '';
    // this.newIngredientAmount = 0;
  }

  constructor() {}

  ngOnInit() {}
}
