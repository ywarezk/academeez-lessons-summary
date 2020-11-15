import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <div>
      <p>
        child works!
      </p>
      <app-grand-child></app-grand-child>
    </div>
  `,
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
