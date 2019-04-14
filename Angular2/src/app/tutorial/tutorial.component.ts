import { Component } from '@angular/core';

@Component ({
    // tslint:disable-next-line:component-selector
    selector: 'my-tutorial',
    template: `
            <h2> hello moto {{title}}</h2>
            <button (click)="OnClick(name.value)"> click me </button>
            <input type="text" #name />
        `
})
export class TutorialComponent {
    // interpolation
    title = 'abc';

    OnClick(value) {
        console.log(value);
    }
}
