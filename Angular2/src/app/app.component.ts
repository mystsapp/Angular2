import { Component, ViewChild } from '@angular/core';
import { TutorialComponent } from './tutorial/tutorial.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular2';

  public agree = 0;
  public disgree = 0;
  public names = ['Mr.A', 'Mr.B', 'Mr.C', 'Mr.D'];

  @ViewChild(TutorialComponent)
  private tutorialComponent: TutorialComponent;

  parentVote(agree: boolean) {
    if (agree) {
      this.agree++;
    } else {
      this.disgree++;
    }
  }

  ChangeName() {
    this.tutorialComponent.SetName('Change name in parent');
  }
}
