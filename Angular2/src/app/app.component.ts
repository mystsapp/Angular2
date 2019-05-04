import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular2';

  cities = [{id: 1, name: 'HaNoi'}, {id: 2, name: 'HCM'}];

  onSubmit(value: any){
    console.log(value);
  }

}
