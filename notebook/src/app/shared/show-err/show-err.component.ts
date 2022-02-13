import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-err',
  templateUrl: './show-err.component.html',
  styleUrls: ['./show-err.component.scss'],
})
export class ShowErrComponent implements OnInit {
  @Input()
  errObj: any;
  constructor() {}

  ngOnInit(): void {}
}
