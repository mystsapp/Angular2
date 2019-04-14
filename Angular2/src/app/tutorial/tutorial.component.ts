import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component ({
    // tslint:disable-next-line:component-selector
    selector: 'my-tutorial',
    templateUrl: 'tutorial.component.html',
    styleUrls: ['tutorial.component.css']

})
export class TutorialComponent {
    @Input() name: string;
    @Output() onVote = new EventEmitter<boolean>();

    // interpolation
    title = 'abc';

    public voted = false;


    SetName(name: string) {
        this.name = name;
    }

    Vote(agree: boolean) {
        this.voted = true;
        this.onVote.emit(agree);
    }
}
