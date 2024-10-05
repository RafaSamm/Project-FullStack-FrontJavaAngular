import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Person } from '../model/person';
import { PersonService } from '../service/person.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-person-update',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './person-update.component.html',
  styleUrl: './person-update.component.css',
})
export class PersonUpdateComponent implements OnInit {
  id: number = 0;
  person: Person = new Person();

  constructor(
    private personService: PersonService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.personService.getPersonById(this.id).subscribe(
      (data) => {
        this.person = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  save() {
    this.personService.updatePerson(this.id, this.person).subscribe(
      (data) => {
        alert('Person updated successfully:');
        this.goToPersonList();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  goToPersonList() {
    this.router.navigate(['/person']);
  }

  cancel() {
    this.goToPersonList();
    throw new Error('Method not implemented.');
  }
}
