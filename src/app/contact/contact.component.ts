import { Component, OnInit } from '@angular/core';
import { Animate } from '../slideup';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [Animate]
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.show = true;
    }, 100);
  }

  show = false;

  get stateOfImg(){
    return this.show ? 'show' : 'hide';
  }

}
