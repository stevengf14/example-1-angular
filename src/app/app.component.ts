import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Hello World';
  color: String = 'red';

  generateRandom(): String {
    return Math.floor(Math.random() * 255).toString(16);
  }

  colorHex(): String {
    return (
      '#' +
      this.generateRandom() +
      this.generateRandom() +
      this.generateRandom()
    );
  }
}
