import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Price } from './price';
import { PriceService } from './price.service';

@Component({
  selector: 'app-price-list',
  templateUrl: './price-list.component.html',
  styleUrls: ['./price-list.component.scss']
})
export class PriceListComponent implements OnInit {

  constructor(private priceServis: PriceService,
              private rout: Router) { }

  public prices: Price[] = [];

  ngOnInit(): void {
    this.getPricesLists();
  }

  public getPricesLists(): void{
    this.priceServis.getPrices().subscribe(
        (response: Price[]) => this.prices = response,
        (error: any) => {console.log(error);
                          this.rout.navigate(['error/main'])},
        () => console.log("Done!")
    );
  }

}
