import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-random',
  standalone: true,
  imports: [],
  templateUrl: './random.component.html',
  styleUrl: './random.component.css',
})
export class RandomComponent implements OnInit {
  random: Number = Math.floor(Math.random() * 100);
  constructor() {}

  ngOnInit() {}
}
