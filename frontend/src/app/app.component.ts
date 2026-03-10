import { Component } from '@angular/core';
import { PropertyListComponent } from './pages/property-list/property-list.component';

@Component({
  selector: 'app-root',
  imports: [PropertyListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'propertyops-frontend';
}
