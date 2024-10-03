import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Person } from '../model/person';
import { FormsModule } from '@angular/forms';
import { PersonService } from '../service/person.service';
import { Router } from '@angular/router';


@Component({
  selector: 'person-registration',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './person-registration.component.html',
  styleUrl: './person-registration.component.css',
})
export class PersonRegistrationComponent implements OnInit {
  person: Person = new Person();

  constructor(private personService: PersonService,
    private router: Router ) {}

  ngOnInit(): void {

  }

  savePerson() {
    this.personService.createPerson(this.person).subscribe(
      () => {
        alert('Person saved successfully:');
        this.person = new Person();
        this.goToPersonList();
      },
      (error) => {
        console.error('Error saving person:', error);
      }
    );
  }
  goToPersonList() {
    this.router.navigate(['/person']);
  }

  save(){
    this.savePerson();
    this.goToPersonList();
  }

}
