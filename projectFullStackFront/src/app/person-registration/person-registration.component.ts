import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Person } from '../model/person';

@Component({
  selector: 'person-registration',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './person-registration.component.html',
  styleUrl: './person-registration.component.css',
})
export class PersonRegistrationComponent implements OnInit {
  person: Person = new Person();

  constructor() {}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  save(){

  }
}
