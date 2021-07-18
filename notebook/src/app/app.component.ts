import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'notebook';
  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
  openedb=true;
  open_close(){
    this.sidenav.toggle()    
    ;
    
  }
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => {
       console.log(result);
        
      return  result.matches
      
      }),
      shareReplay()
    );
    @ViewChild('rightSidenav', {static: true}) sidenav!: MatSidenav;

  draweropenclose(){

    this.isHandset$.subscribe(e=>{
      
    })
  }
  called(){
    this.sidenav.toggle()    
  }
  constructor(private breakpointObserver: BreakpointObserver){}
}
