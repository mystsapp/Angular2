import { Component } from '@angular/core';

@Component ({
    // tslint:disable-next-line:component-selector
    selector: 'my-tutorial',
    templateUrl: 'tutorial.component.html',
    styleUrls: ['tutorial.component.css']

})
export class TutorialComponent {

    // interpolation
    title = 'abc';
    today = Date.now();

    a = 0.259;
    b = 1.3495;

    pi = 3.14;
  e = 2.718281828459045;

  // tslint:disable-next-line:ban-types
  object: Object = {foo: 'bar', baz: 'qux', nested: {xyz: 3, numbers: [1, 2, 3, 4, 5]}};

  str = 'abcdefghij';
}
