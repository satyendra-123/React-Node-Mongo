import { DataShareSvc } from './../services/DataShareSvc';
import { Sweet, Cart } from './../model/sweets.model';
import { BackendService } from './../services/backend.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { User } from '../model/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
   @ViewChild('checkout') public checkout:ElementRef;
   @ViewChild('darkModalForm') public signInModal:ElementRef;
   @ViewChild('dismismodal') public dismisModal:ElementRef;
      
  error: boolean = false
  errorMessage : string
  successMessage : string
  sweets : Sweet[];
  //selectedSwts : Sweet[] = new Array()  
  //swtCount : number
  cart: Cart = new Cart()  
  checkOut : boolean
  public step = 1;

  user : User;

  constructor(private backendSvc: BackendService, private dataShareSvc: DataShareSvc) {
    this.dataShareSvc.user.subscribe(usr=>{
        if(usr && usr.name){
            this.user = usr
            this.dismisModal.nativeElement.click();
        }
    })
 }

  ngOnInit() {
    this.getSweets()
    this.loadSignInModal();
  }

  loadSignInModal(){
      this.signInModal.nativeElement.click();
  }

  getSweets(){
    this.error = false
    this.backendSvc.getSweets().subscribe(res=>{
      console.log('sweets response ',res) 
      this.sweets = res
      this.successMessage = 'Sweets for you from backend:'
    },error=>{
        this.error = true
        this.errorMessage = error.message;
        console.log('calling backend service',error)
        setTimeout(()=>{this.error = false}, 10000)
    })
  }

  //Purchase
  buySweets(index, swt){
    console.log('buy sweet ',index, swt)
    if(!this.cart.selectedSwts.includes(swt, 0)){
        this.cart.selectedSwts.push(swt)
    }
  }

  //To checkout and display 
  //delievery option / address / billing information/ order detail / payment option / Success Message
  checkOutNw(){
    this.dataShareSvc.cart.next(this.cart)  
    if(null != this.checkout){
      this.checkout.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'end' });
      this.checkOut = true; 
    }
  }

  /* isCartEmpty(): boolean{
    this.checkOut =  this.cart.selectedSwts.length == 0? false : true;
    return this.checkOut
  } */

  //on changes calculate the total
  //on increase for each sweet increase the total
  //on decrease for each available sweet reduce the total accordingly
  calculateTotal(index : number, swt: Sweet){
      console.log('test logger:', swt.price,' ::::: count for selected sweet ', swt.count)
      this.cart.totalAmount = 0;
      this.cart.selectedSwts.forEach(swt=>{
        swt.totalAmnt = swt.price * swt.count
        this.cart.totalAmount = this.cart.totalAmount + swt.totalAmnt 
      })
  }

  removeItems(swt, index){
     this.cart.selectedSwts.splice(index, 1)
     this.cart.totalAmount = this.cart.totalAmount > 0 ? this.cart.totalAmount - swt.count * swt.price : 0
  }

  getDataForId(){
    this.error = false
    let id = 101;
    this.backendSvc.getSweetsForId(id).subscribe(res=>{
      let response = res
      this.successMessage = 'Response recieved for id:'+response.id+response.link
    },error=>{
        this.error = true
        this.errorMessage = error.message;
        console.log('calling backend service',error)
        setTimeout(()=>{this.error = false}, 10000)
    })
  }
}
