import { PersonService } from './../service/person.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Person } from '../model/person';
import { Router } from '@angular/router';

@Component({
  selector: 'person-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './person-list.component.html',
  styleUrl: './person-list.component.css',
})
export class PersonListComponent implements OnInit {
  persons: Person[] = [];

  constructor(private personService: PersonService, private router: Router) {}

  ngOnInit(): void {
    try {
      this.findAllPerson();
    } catch (error) {
      throw new Error('Error, people not found!!' + error);
    }
  }

  findAllPerson(): void {
    this.personService.findAllPerson().subscribe((data) => {
      this.persons = data;
    });
  }

  updatePerson(id: number): void {
    this.router.navigate(['/personUpdate', id]);
  }

  deletePerson(id: number): void {
    this.personService.deletePerson(id).subscribe((data) => {
      alert('Person deleted successfully');
      console.log(data);
      this.findAllPerson();
    });
  }
  detailsPerson(id: number){
    this.router.navigate(['/person-details', id]);
  }
}
