import { OverlayContainer } from '@angular/cdk/overlay';
import { HttpClient, HttpParams } from '@angular/common/http';
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
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {
  catchError,
  finalize,
  map,
  merge,
  Observable,
  tap,
  throwError,
} from 'rxjs';

export interface Lesson {
  id: number;
  description: string;
  duration: string;
  seqNo: number;
  courseId: number;
}
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];
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
    private cdref: ChangeDetectorRef,
    private http: HttpClient
  ) {}
  loading = false;
  ngDoCheck(): void {}
  ngOnInit(): void {
    this.loadLessonpage();
    console.log('datasource', this.lessons);
  }
  ngAfterViewChecked(): void {}
  ngAfterContentChecked(): void {}
  ngAfterContentInit(): void {}

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

  lessons: Lesson[] = [];
  displayedColumns: string[] = ['seqNo', 'description', 'duration'];
  // dataSource = this.lessons;

  checkgetfn() {
    // HttpClient;
  }

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  @ViewChild(MatSort)
  sort!: MatSort;
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.

    this.sort.sortChange.subscribe((ele) => {
      this.paginator.pageIndex = 0;
    });
    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        tap(() => {
          this.loadLessonpage();
        })
      )
      .subscribe();
  }
  loadLessonpage() {
    console.log('this.paginator?.pageIndex', this.paginator?.pageIndex);

    console.log('this.paginator?.pageIndex', this.paginator?.pageSize);
    this.loading = true;
    return this.http
      .get('http://localhost:9000/api/lessons', {
        params: new HttpParams()
          .set('courseId', 3)
          .set('filter', '')
          .set('sortOrder', this.sort?.direction ?? 'asc')
          .set('pageNumber', this.paginator?.pageIndex ?? 0)
          .set('pageSize', this.paginator?.pageSize ?? 3),
      })
      .pipe(map((res: any) => res['payload']))
      .pipe(
        tap((lessons) => {
          console.log(lessons);

          return (this.lessons = lessons);
        }),
        catchError((ele) => {
          console.log(ele);
          return throwError(ele);
        }),
        finalize(() => (this.loading = false))
      )
      .subscribe((ele) => {
        console.log(ele);
      });
  }
  findLessons(
    courseId: number,
    filter = '',
    sortOrder = 'asc',
    pageNumber = 0,
    pageSize = 3
  ): Observable<Lesson[]> {
    return this.http
      .get('http://localhost:9000/api/lessons', {
        params: new HttpParams()
          .set('courseId', courseId.toString())
          .set('filter', filter)
          .set('sortOrder', sortOrder)
          .set('pageNumber', pageNumber.toString())
          .set('pageSize', pageSize.toString()),
      })
      .pipe(map((res: any) => res['payload']));
  }
}
