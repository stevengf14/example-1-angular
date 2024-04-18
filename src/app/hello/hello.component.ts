import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hello',
  standalone: true,
  imports: [],
  templateUrl: './hello.component.html',
  styleUrl: './hello.component.css',
})
export class HelloComponent implements OnInit {
  @Input() colorName: String;

  constructor() {}

  ngOnInit(): void {}
}
