import { Component, OnInit } from '@angular/core';
import { headerMenu } from '../shared/utlis/type';

@Component({
  selector: 'app-main-site',
  templateUrl: './main-site.component.html',
  styleUrls: ['./main-site.component.scss'],
})
export class MainSiteComponent implements OnInit {
  headerMenu?: headerMenu[] = [
    {
      name: 'dashboard',
      link: '/main-site/dashboard',
    },
    {
      name: 'page1',
      link: '/main-site/page1',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
