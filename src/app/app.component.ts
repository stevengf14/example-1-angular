import { Component } from '@angular/core';
import { ColorsComponent } from './colors/colors.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ColorsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Hello World';
 
}
