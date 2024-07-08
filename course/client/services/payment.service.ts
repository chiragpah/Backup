import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor() { }
  totalAmount = 0.1;
  updateAmount(amount: number) {
    this.totalAmount = amount;
    console.log(this.totalAmount);

  }

  transactionID = "";


}
