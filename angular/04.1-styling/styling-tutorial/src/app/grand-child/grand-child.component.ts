import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grand-child',
  template: `
    <p>
      grand-child works!
    </p>
  `,
  styleUrls: ['./grand-child.component.scss']
})
export class GrandChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
