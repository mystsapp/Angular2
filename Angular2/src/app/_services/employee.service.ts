import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

constructor() { }

employees = [
  {id: 1, name: 'Nguyen Van A'},
  {id: 1, name: 'Nguyen Van B'},
  {id: 2, name: 'Nguyen Van C'},
  {id: 1, name: 'Nguyen Van D'},
  {id: 1, name: 'Nguyen Van E'}
];

getList() {
  return this.employees;
}

}
