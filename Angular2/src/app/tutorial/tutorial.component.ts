import { Component } from '@angular/core';

@Component ({
    // tslint:disable-next-line:component-selector
    selector: 'my-tutorial',
    template: `
            <h2> hello moto {{title}}</h2>
            <h3 [class.redColor]="applyClass">def</h3>
            <h4 [style.color]="applyStyle ? 'blue' : 'orange'">apply style </h4>

            <input type="text" [value]="welcome" />

            <img src="{{imgSrc}}" /> <br />
            <img [src]="img" />
        `,
    styles: [`
                h2 {color: red}
                .redColor {color: red}
            `]
})
export class TutorialComponent {
    // interpolation
    title = 'abc';
    imgSrc = 'https://lorempixel.com/300/300';

    // property binding
    img = 'https://lorempixel.com/300/300';
    welcome = 'welcome to angular 2';

    // binding class and stype
    applyClass = true;
    applyStyle = false;

}
