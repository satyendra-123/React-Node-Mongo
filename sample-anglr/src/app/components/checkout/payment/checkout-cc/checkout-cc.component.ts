import { CreditCardDO } from './../../../model/checkout.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'checkout-cc',
  templateUrl: './checkout-cc.component.html',
  styleUrls: ['./checkout-cc.component.css', './../../checkout.component.css', './../../address-manage/address-manage.component.css']
})
export class CheckoutCcComponent implements OnInit {

  creditCards : CreditCardDO[]
  years : number[] = new Array();
  months: number[]
  selectedCardIndex : number
  selectedCard : string
  //new Card
  creditCardForm : FormGroup
  
  //edit card
  editExistingCard: string
  creditCardEditForm : FormGroup

  constructor() { }

  ngOnInit() {
    this.createCCForm()
    this.getCreditCards()
    this.putYears()
    this.months = MONTHS
    //existing form
    this.createExistCCForm()
  }

  getCreditCards(){
    this.creditCards = CCACARDS
  }

  putYears(){
    let currentYear = new Date().getFullYear()
    for(var i=0; i<10; i++){
       this.years.push(currentYear+i)
    }
  }

  selectCCCard(idx: number){
    this.selectedCardIndex = idx
    this.editExistingCard = null
  }
  
  createCCForm(){
    this.creditCardForm = new FormGroup({
      'ccANumber' : new FormControl('', [Validators.required, Validators.pattern('^\\d+$')]),
      'cvvNumber' : new FormControl('', [Validators.required, Validators.pattern('^\\d+$')]),
      'expiryMonth' : new FormControl('', Validators.required),
      'expiryYear' : new FormControl('', Validators.required)
    })
  }

  createExistCCForm(){
    this.creditCardEditForm = new FormGroup({
      'ccANumber' : new FormControl('', [Validators.required, Validators.pattern('^\\d+$')]),
      'cvvNumber' : new FormControl('', [Validators.required, Validators.pattern('^\\d+$')]),
      'expiryMonth' : new FormControl('', Validators.required),
      'expiryYear' : new FormControl('', Validators.required)
    })
  }


  editCCA(cc : CreditCardDO){
    this.creditCardEditForm.controls['ccANumber'].setValue(cc.ccANumber)
    this.editExistingCard = 'editCard'
  }

  onSubmit(){

  }

}

export const CCACARDS : CreditCardDO[] = [
  {
    'ccANumber' : 123445678901234,
    'cvvNumber' : 123,
    'expiryDate' : '11/2025'
  },
  {
    'ccANumber' : 123495678901235,
    'cvvNumber' : 143,
    'expiryDate' : '11/2025'
  },
  {
    'ccANumber' : 123495678901238,
    'cvvNumber' : 343,
    'expiryDate' : '11/2095'
  }
]

export const MONTHS : number[]=[
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ,11 ,12
]