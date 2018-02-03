import { Component, OnInit } from '@angular/core';
// defining component selector ,templateUrl and styleUrls
@Component({
  selector: 'app-component',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css']
})
export class RootComponent implements OnInit {
  firstName: string;
  lastName: string;
  title: string;

  ngOnInit() {
    this.firstName = 'Sachin';
    this.lastName = 'Tendular';
  }

  submit(first, last) {
    this.title = `${first.value} ${last.value}`;
  }

}
