import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Person } from '../person';

@Component({
  selector: 'person-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './person-list.component.html',
  styleUrl: './person-list.component.css',
})
export class PersonListComponent implements OnInit {
  persons: Person[] = [];

  constructor() {}

  ngOnInit(): void {
    this.persons = [{
        id: 1,
        firstName: 'John',
        lastName: 'Straus',
        birthDate: new Date('1990-07-10'),
        email: 'john@example.com',
        phone: '000000000000',
        cpf: '00000000000',
        },
        {
        id: 2,
        firstName: 'Jane',
        lastName: 'Straus',
        birthDate: new Date('1995-01-17'),
        email: 'jane@example.com',
        phone: '000000000000',
        cpf: '00000000000', },

    ];

    throw new Error('Method not implemented.');
  }
}
