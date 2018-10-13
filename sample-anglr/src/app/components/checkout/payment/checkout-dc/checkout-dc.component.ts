import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DebitCardDO } from './../../../model/checkout.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'checkout-dc',
  templateUrl: './checkout-dc.component.html',
  styleUrls: ['./checkout-dc.component.css', './../../checkout.component.css', './../../address-manage/address-manage.component.css']
})
export class CheckoutDcComponent implements OnInit {

  debitCards : DebitCardDO[]
  years : number[] = new Array();
  months: number[]
  selectedCardIndex : number
  selectedCard : string
  //new Card
  debitCardForm : FormGroup
  
  //edit card
  editExistingCard: string
  debitCardEditForm : FormGroup

  constructor() { }

  ngOnInit() {
    this.createDCForm()
    this.getDebitCards()
    this.putYears()
    this.months = MONTHS
    //existing form
    this.createExistDCForm()
  }

  getDebitCards(){
    this.debitCards = DCACARDS
  }

  putYears(){
    let currentYear = new Date().getFullYear()
    for(var i=0; i<10; i++){
       this.years.push(currentYear+i)
    }
  }

  selectDCCard(idx: number){
    this.selectedCardIndex = idx
    this.editExistingCard = null
  }

  createDCForm(){
    this.debitCardForm = new FormGroup({
      'dcANumber' : new FormControl('', [Validators.required, Validators.pattern('^\\d+$')]),
      'cvvNumber' : new FormControl('', [Validators.required, Validators.pattern('^\\d+$')]),
      'expiryMonth' : new FormControl('', Validators.required),
      'expiryYear' : new FormControl('', Validators.required)
    })
  }

  createExistDCForm(){
    this.debitCardEditForm = new FormGroup({
      'dcANumber' : new FormControl('', [Validators.required, Validators.pattern('^\\d+$')]),
      'cvvNumber' : new FormControl('', [Validators.required, Validators.pattern('^\\d+$')]),
      'expiryMonth' : new FormControl('', Validators.required),
      'expiryYear' : new FormControl('', Validators.required)
    })
  }

  editDCA(cc : DebitCardDO){
    this.debitCardEditForm.controls['dcANumber'].setValue(cc.dcANumber)
    this.editExistingCard = 'editCard'
  }

  onSubmit(){

  }

}

export const DCACARDS : DebitCardDO[] = [
  {
    'dcANumber' : 123445678901234,
    'cvvNumber' : 123,
    'expiryDate' : '11/2025'
  },
  {
    'dcANumber' : 123495678901235,
    'cvvNumber' : 143,
    'expiryDate' : '11/2025'
  },
  {
    'dcANumber' : 123495678901238,
    'cvvNumber' : 343,
    'expiryDate' : '11/2095'
  }
]

export const MONTHS : number[]=[
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ,11 ,12
]