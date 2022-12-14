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
  public treatmentPrices: Price[] = [];

  public isValid: boolean = true;
  public btnName: string = "Zabiegi";

  ngOnInit(): void {
    this.getPricesLists();
  }

  public changeViewOnTreatment(): void{
       this.btnName = "Usługi";
       this.isValid = false;
  }
  public changeViewOnPriceList(): void{
    this.btnName = "Zabiegi";
    this.isValid = true;
  }

  public getPricesLists(): void{
    this.priceServis.getPrices().subscribe(
        (response: Price[]) => this.prices = response,
        (error: any) => {console.log(error);
                          this.rout.navigate(['error/main'])},
        () => console.log("Done!")
    );

    this.priceServis.getTreatments().subscribe(
      (response: Price[]) => this.treatmentPrices = response,
      (error: any) => {console.log(error);
                        this.rout.navigate(['error/main'])},
      () => console.log("Done!")
  );
  }

}
