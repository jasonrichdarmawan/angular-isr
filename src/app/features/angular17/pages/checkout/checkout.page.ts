import { Component } from '@angular/core';
import { SlotAndTicketsComponent } from '../../components/slot-and-tickets/slot-and-tickets.component';
import { YourDetailsComponent } from '../../components/your-details/your-details.component';
import { PaymentComponent } from '../../components/payment/payment.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [
    NgIf,
    SlotAndTicketsComponent,
    YourDetailsComponent,
    PaymentComponent,
  ],
  templateUrl: './checkout.page.html',
  styleUrl: './checkout.page.scss'
})
export class CheckoutPage {
  selector: "app-slot-and-tickets" | "app-your-details" | "app-payment";

  constructor() {
    this.selector = "app-slot-and-tickets";
  }
}
