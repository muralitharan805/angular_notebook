import { Component, Input, OnInit } from '@angular/core';
import { LoaderService } from '../loader.service';

@Component({
  selector: 'app-loder',
  templateUrl: './loder.component.html',
  styleUrls: ['./loder.component.scss'],
})
export class LoderComponent implements OnInit {
  @Input()
  routing: boolean = false;

  @Input()
  detectRoutingOngoing = false;

  constructor(public loaderService: LoaderService) {}

  ngOnInit(): void {
    this.loaderService.loading$.subscribe((ele) => {
      console.log(ele);
    });
  }
}
