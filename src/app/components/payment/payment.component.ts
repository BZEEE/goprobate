import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFireFunctions } from '@angular/fire/functions';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { StripeCardElementOptions, StripeElementsOptions } from '@stripe/stripe-js';
import { StripeCardComponent, StripeCardNumberComponent, StripeService } from 'ngx-stripe';
import { FormErrorService } from 'src/app/services/form-error.service';
import { FormValidatorService } from 'src/app/services/form-validator.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css', './../../general-styling/styling.css', './../../general-styling/normalize.css']
})
export class PaymentComponent implements OnInit {
 
  paymentForm: FormGroup;
  amount: number = 500
 
  constructor(private fb: FormBuilder,
              public formErrorSvc: FormErrorService,
              private firebaseFunctions: AngularFireFunctions,
              private formValidatorSvc: FormValidatorService,
              private stripeService: StripeService) {}
 
  ngOnInit(): void {
    this.paymentForm = this.fb.group({
      amount: new FormControl(null),
      fullName: new FormControl(null, [Validators.required]),
      cardNumber: new FormControl(null, [Validators.required, Validators.minLength(16), Validators.maxLength(16)]),
      cardExpiryDate: new FormControl(null, [Validators.required, Validators.pattern("^[0-9]{2}/[0-9]{2}$")]),
      cvc: new FormControl(null, [Validators.required, Validators.pattern("^[0-9]{3}$")])
    });
  }

  pay() {
    // send request to backend and create token for payment
    const fun = this.firebaseFunctions.httpsCallable("some")
    let data = fun({name: "some data"})
  }

}
