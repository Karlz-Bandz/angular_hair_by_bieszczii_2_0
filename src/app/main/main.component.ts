import { Component, OnInit } from '@angular/core';
import { Animate } from '../slideup';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations: [Animate]
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
