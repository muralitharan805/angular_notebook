import { OverlayContainer } from '@angular/cdk/overlay';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'notebook';
  isAlternateMode = false;
  constructor(public overlayContainer: OverlayContainer) {}

  check() {
    this.overlayContainer
      .getContainerElement()
      .classList.add('unicorn-dark-theme');

    this.isAlternateMode = !this.isAlternateMode;
  }
}
