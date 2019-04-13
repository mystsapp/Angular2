import { Component } from '@angular/core';

@Component ({
    // tslint:disable-next-line:component-selector
    selector: 'my-tutorial',
    template: `
            <h2> hello moto {{title}}</h2>
            <input type="text" [value]="welcome" />

            <img src="{{imgSrc}}" /> <br />
            <img [src]="img" />
        `,
    styles: ['h2 {color: red}']
})
export class TutorialComponent {
    // interpolation
    title = 'abc';
    imgSrc = 'https://lorempixel.com/300/300';

    // property binding
    img = 'https://lorempixel.com/300/300';
    welcome = 'welcome to angular 2';

}
