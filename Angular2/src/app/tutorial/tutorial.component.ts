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

    private cone = true;
    private ctwo = true;

    private style = 'italic';
    private size = '60px';

    toggleClass() {
        this.cone = !this.cone;
        this.ctwo = !this.ctwo;
    }
}
