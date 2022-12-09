import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
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
    localStorage.setItem("1", "0");
    localStorage.setItem("2", "0");

    this.router.navigate(["login"]);
  }



}
