import { Component, OnInit } from '@angular/core';
import { Payment } from 'src/app/models/payment';

@Component({
  selector: 'app-payment-history',
  templateUrl: './payment-history.component.html',
  styleUrls: ['./payment-history.component.css']
})
export class PaymentHistoryComponent implements OnInit {

  payments: Payment[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
