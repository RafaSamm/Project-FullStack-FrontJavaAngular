import { Component, OnInit } from '@angular/core';
import { Person } from '../model/person';
import { ActivatedRoute } from '@angular/router';
import { PersonService } from '../service/person.service';

@Component({
  selector: 'app-person-details',
  standalone: true,
  imports: [],
  templateUrl: './person-details.component.html',
  styleUrl: './person-details.component.css',
})
export class PersonDetailsComponent implements OnInit {
  id: number = 0;
  person: Person = new Person();

  constructor(
    private route: ActivatedRoute,
    private personService: PersonService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.personService.getPersonById(this.id).subscribe((data) => {
      this.person = data;
    });
    throw new Error('Method not implemented.');
  }
}
