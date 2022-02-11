import { OverlayContainer } from '@angular/cdk/overlay';
import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  DoCheck,
  OnInit,
  ViewChild,
} from '@angular/core';

export interface tab_type {
  key: string;
  value: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent
  implements
    AfterViewInit,
    AfterContentInit,
    AfterViewChecked,
    AfterContentChecked,
    OnInit,
    DoCheck
{
  title = 'notebook';
  isAlternateMode = false;
  constructor(
    public overlayContainer: OverlayContainer,
    private cdref: ChangeDetectorRef
  ) {}
  ngDoCheck(): void {}
  ngOnInit(): void {}
  ngAfterViewChecked(): void {}
  ngAfterContentChecked(): void {}
  ngAfterContentInit(): void {}

  ngAfterViewInit(): void {}

  check() {
    this.overlayContainer
      .getContainerElement()
      .classList.add('unicorn-dark-theme');
    this.isAlternateMode = !this.isAlternateMode;
  }

  tabLoadTimes: Date[] = [];

  getTimeLoaded(index: number) {
    if (!this.tabLoadTimes[index]) {
      this.tabLoadTimes[index] = new Date();
    }

    return this.tabLoadTimes[index];
  }

  items: tab_type[] = [{ key: 'Tab1', value: 'content1' }];
  selectedIndex: any;
  hide_btn: boolean = true;

  addnewtab() {
    this.items.push({ key: 'Tab2', value: 'content1' });
    this.selectedIndex = this.items.length - 1;
    this.hide_btn = false;
  }

  selectedIndexChange(value: any) {
    console.log('selectedIndexChange ', value);
  }

  selectedTabChange(value: any) {
    console.log('selectedTabChange ', value);
  }
  closeTab(ele: tab_type) {
    this.items = this.items.filter(function (ele) {
      return ele.key != ele.key;
    });
  }
}
