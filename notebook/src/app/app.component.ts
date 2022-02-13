import { OverlayContainer } from '@angular/cdk/overlay';
import { HttpClient } from '@angular/common/http';
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
import { Config } from 'protractor';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize, map, retry, tap } from 'rxjs/operators';
import { AppserviceService } from './appservice.service';
import { API_END_POINTS } from './shared/Constant';
import { LoaderService } from './shared/loader.service';
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
  EmpDetails$!: Observable<any>;
  StuDetails$!: Observable<any>;

  constructor(
    public overlayContainer: OverlayContainer,
    private cdref: ChangeDetectorRef,
    private http: HttpClient,
    public appService: AppserviceService,
    public loaderservice: LoaderService
  ) {}
  ngDoCheck(): void {}
  temp: any;
  errorObject: any;

  ngOnInit(): void {
    // this.EmpDetails$ = this.http
    //   .get<any>('http://localhost:3000/employees')
    //   .pipe(
    //     catchError((err) => {
    //       console.log('error caught in service');
    //       console.error(err);
    //       // this.EmpDetails$ = err;
    //       this.errorObject = err;
    //       return throwError(err.statusText);
    //     })
    //   );
    // this.StuDetails$ = this.http.get<any>('http://localhost:3000/student');
    // this.loaderservice.loadingOn();

    this.StuDetails$ = this.appService
      .invokeService(
        API_END_POINTS.student_get.method,
        API_END_POINTS.student_get.path
      )
      .pipe(
        catchError((ele) => {
          console.error(ele);
          return ele;
        })
      );

    this.EmpDetails$ = this.appService
      .invokeService(API_END_POINTS.emp_get.method, API_END_POINTS.emp_get.path)
      .pipe(
        catchError((err) => {
          console.log(err);
          this.errorObject = err;
          return throwError(err);
        })
      );
    console.log('ng onint *********');
  }
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
