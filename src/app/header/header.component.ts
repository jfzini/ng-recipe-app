import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() switchNavigation = new EventEmitter<string>();

  onNavigate(feature: string) {
    this.switchNavigation.emit(feature);
  }

  collapsed = true;

}
