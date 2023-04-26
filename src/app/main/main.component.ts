import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations: [
    trigger('popState', [
      state('show', style({
        opacity: 1
      })),
      state('hide', style({
        opacity: 0
      })),
      transition('show => hide', animate('600ms ease-out')),
      transition('hide => show', animate('1000ms ease-in'))
    ])
  ]
})
export class MainComponent implements OnInit {

  constructor() { }

  show = false;

  ngOnInit(): void {

    setTimeout(() => {
      this.show = true;
    }, 100);
    
  }

  get stateOfImg(){
    return this.show ? 'show' : 'hide';
  }

  // toggle() {
  //   this.show = !this.show;
  // }

}
