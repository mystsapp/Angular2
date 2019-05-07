import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
// import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  apiUrl = 'http://5cce6daa9eb94f0014c4825b.mockapi.io/api/Employee';
  constructor(private http: HttpClient) { }

  // getList() {
  //   return this.http.get(this.apiUrl).pipe(map(data => { })).subscribe(result => {
  //     console.log(result);
  //   });
  // }

  getList(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

}
