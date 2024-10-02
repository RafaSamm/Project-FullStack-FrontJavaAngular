import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from '../model/person';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  private url = 'http://localhost:8080/person';

  constructor(private httpClient: HttpClient) {}

  findAllPerson(): Observable<Person[]> {
    return this.httpClient.get<Person[]>(`${this.url}`);
  }
  createPerson(person: Person): Observable<Person> {
    return this.httpClient.post<Person>(`${this.url}/create`, person);
  }
}
