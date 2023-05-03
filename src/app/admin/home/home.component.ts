import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobService } from 'src/app/globalfunctions';
import { Animate } from 'src/app/animate';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [Animate]
})
export class HomeComponent implements OnInit {

  constructor(private router: Router,
    private glob: GlobService) { }

  ngOnInit(): void {
    this.glob.secureFront();
    setTimeout(() => {
      this.show = true;
    }, 100);
  }

  show = false;

  get stateOfImg(){
    return this.show ? 'show' : 'hide';
  }

  goToAdd(): void{
     this.router.navigate(['add/client']);
  }

  goToDescription(): void{
    this.router.navigate(['add/description']);
  }

  goToList(): void{
    this.router.navigate(['presentation']);
  }

  goToDelete(): void{
    this.router.navigate(['delete/client']);
  }

  logOut(): void{
  localStorage.setItem("token", "0")

    this.router.navigate(["login"]);
  }



}
