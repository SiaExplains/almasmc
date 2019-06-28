import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  firstName = '';
  lastName = '';
  status = false;
  constructor() { }

  ngOnInit() {
  }

  showMessage() {
    alert(`${this.firstName}  ${this.lastName}`);
  }
  disableB1() {
    this.status = true;
  }
}
