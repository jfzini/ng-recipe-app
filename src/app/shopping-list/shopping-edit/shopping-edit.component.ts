import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
  OnChanges,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
  encapsulation: ViewEncapsulation.None, // changing the default behavior of emulated shadow DOM to none
})
export class ShoppingEditComponent implements OnChanges {
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
  
  constructor() { console.log('constructor called') }
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }

  addIngredient(target: HTMLInputElement) {
    this.addIngredientEvent.emit({
      name: target.value,
      amount: Number(this.newIngredientAmount.nativeElement.value), // this is the syntax of ViewChild
    });
    // this.newIngredientName = '';
    // this.newIngredientAmount = 0;
  }

  // ngOnInit() { console.log('ngOnInit called') } // this is called after the constructor
  // ngOnChanges(changes: SimpleChanges) { console.log('ngOnChanges called', changes) } // this is called when an @Input() prop changes. Here we can access the previous and current values
  // ngDoCheck() { console.log('ngDoCheck called') } // this is called when Angular checks for any changes
  // ngAfterContentInit() { console.log('ngAfterContentInit called') } // this is called after content (ng-content) has been projected into view
  // ngAfterContentChecked() { console.log('ngAfterContentChecked called') } // this is called every time the projected content has been checked
  // ngAfterViewInit() { console.log('ngAfterViewInit called') } // this is called after the component's view (and child views) has been initialized
  // ngAfterViewChecked() { console.log('ngAfterViewChecked called') } // this is called every time the view (and child views) have been checked
  // ngOnDestroy() { console.log('ngOnDestroy called') } // this is called once the component is about to be destroyed
}
