import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { headerMenu } from '../utlis/type';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input()
  headerMenu?: headerMenu[];

  iscollapse = false;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  signout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  Iscollapse_emit() {
    this.iscollapse = !this.iscollapse;
  }
}
