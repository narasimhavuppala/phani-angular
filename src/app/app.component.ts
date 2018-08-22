import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular6-phani-demos';
  a = 4;
  b = 3;
  isShow = true;

  updateDOM(event: Event) {

    console.log(event);
    this.isShow = false;

    this.a = 11;
  }
}
