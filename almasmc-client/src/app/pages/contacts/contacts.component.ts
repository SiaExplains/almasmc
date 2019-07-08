import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  lat = 35.695711;
  lng = 51.448631;
  z = 16;
  constructor() { }

  ngOnInit() {
  }

}
