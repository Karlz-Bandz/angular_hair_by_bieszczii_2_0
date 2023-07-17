import { Component, OnInit } from '@angular/core';
import { Animate } from '../animate';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations: [Animate]
})
export class MainComponent implements OnInit {

  constructor() { }

  images: string[] = [
  "assets/img/salon/salon2.jpg",
  "assets/img/salon/salon3.jpg",
  "assets/img/salon/salon4.jpg",
  "assets/img/salon/salon5.jpg",
  "assets/img/salon/salon6.jpg",
  "assets/img/salon/salon7.jpg",
  "assets/img/salon/salon8.jpg",
  "assets/img/salon/salon9.jpg"];

  image: string = "assets/img/salon/salon1.jpg";

  show = false;

  ngOnInit(): void {

    setTimeout(() => {
      this.show = true;
      this.imageChanger();
    }, 100);
    
  }

  public changerTimer(index: number): void{
    setTimeout(() => {
        this.image = this.images[index];
      }, 4000 * index);
  }

  public imageChanger(): void {
    
    for(let i = 1; i < this.images.length; i++){
        this.changerTimer(i);
    }
  }

  get stateOfImg(){
    return this.show ? 'show' : 'hide';
  }

}
