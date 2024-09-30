export class Person {
  id: number;
  firstName: String;
  lastName: String;
  birthDate: Date;
  email: String;
  phone: String;
  cpf: String;

   constructor(id: number, firstName: String, lastName: String, birthDate: Date, email: String, phone: String, cpf: String) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthDate = birthDate;
    this.email = email;
    this.phone = phone;
    this.cpf = cpf;
  }
}
