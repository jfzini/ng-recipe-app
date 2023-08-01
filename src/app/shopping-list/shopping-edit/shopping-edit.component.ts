import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  @Input() ingredient: { name: string, amount: number }; //the prop is passed between [] and accessed in the child component with @Input()
}
