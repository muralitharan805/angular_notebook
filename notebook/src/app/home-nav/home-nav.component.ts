import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-home-nav',
  templateUrl: './home-nav.component.html',
  styleUrls: ['./home-nav.component.css']
})
export class HomeNavComponent {

  isCheck:any;

  links = ['First', 'Second', 'Third'];
  activeLink = this.links[0];
 

  constructor(private breakpointObserver: BreakpointObserver) {
    
    breakpointObserver.observe([
      Breakpoints.XSmall,
    ]).subscribe(result => {
      if (result.matches) {
        this.isCheck=true
      }else{
        this.isCheck=false

      }
    }); 
  }

}
