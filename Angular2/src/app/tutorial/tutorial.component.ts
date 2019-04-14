import { Component } from '@angular/core';

@Component ({
    // tslint:disable-next-line:component-selector
    selector: 'my-tutorial',
    templateUrl: 'tutorial.component.html'
})
export class TutorialComponent {
    // interpolation
    title = 'abc';

    showLineIf = true;

    color = 'blue';

    list: string[] = ['red', 'green', 'blue']
}
