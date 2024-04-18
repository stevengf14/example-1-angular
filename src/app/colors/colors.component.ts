import { Component, OnInit } from '@angular/core';
import { HelloComponent } from '../hello/hello.component';

@Component({
  selector: 'app-colors',
  standalone: true,
  imports: [HelloComponent],
  templateUrl: './colors.component.html',
  styleUrl: './colors.component.css',
})
export class ColorsComponent implements OnInit {
  localColor: String =
    '#' + this.generateRandom() + this.generateRandom() + this.generateRandom();
  constructor() {}

  ngOnInit(): void {}

  generateRandom(): String {
    return Math.floor(Math.random() * 255).toString(16);
  }

  colorHex(): String {
    this.localColor =
      '#' +
      this.generateRandom() +
      this.generateRandom() +
      this.generateRandom();
    return this.localColor;
  }
}
