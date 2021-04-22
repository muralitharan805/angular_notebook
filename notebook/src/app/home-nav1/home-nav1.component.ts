import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-home-nav1',
  templateUrl: './home-nav1.component.html',
  styleUrls: ['./home-nav1.component.css']
})
export class HomeNav1Component {

  found:any;

  links = ['Home','contact','Sign in']

  activeLink = this.links[0];

  constructor(private breakpointObserver: BreakpointObserver) {

    breakpointObserver.observe([
      Breakpoints.XSmall,
    ]).subscribe(result => {
      if (result.matches) {
        console.log('fount');
        this.found=true

      }else{
        console.log(' not fount');
        this.found=false

      }
    });


  }

  ngOnInit() {
    
   
  
  }

  
}
