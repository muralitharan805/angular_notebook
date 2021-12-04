import { OverlayContainer } from '@angular/cdk/overlay';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'notebook';
  isAlternateMode = false
  constructor(public overlayContainer: OverlayContainer) {

  }

  check() {
    this.overlayContainer.getContainerElement().classList.add('unicorn-dark-theme');
    this.isAlternateMode = !this.isAlternateMode
  }
  urls: any = [];
  othercontent = false
  file_upload(event: any) {
    for (var i = 0; i < event.target.files.length; i++) {
      if (event.target.files[i].type == "image/png" || event.target.files[i].type == "image/jpeg" || event.target.files[i].type == "image/jpg") {
        var reader = new FileReader();
        reader.readAsDataURL(event.target.files[i]);
        var temp = event.target.files[i]
        reader.onload = (reder_event) => {

          this.urls.push({
            object: "images",
            url: reder_event?.target?.result,
            ...event.target.files[i],
            file: temp
          })

        }
      } else {
        this.urls.push({
          object: "others",
          url: null,
          ...event.target.files[i],
          file: event.target.files[i]
        })
      }
    }

    this.urls.forEach((element: any) => {
      if (element.object == "others") {
        this.othercontent = true
      }
    });

  }

  close(value: any) {
    console.log(value);

    this.urls = this.urls.filter((ele: any, index: any) => {
      return index !== value
    })

  }
}
