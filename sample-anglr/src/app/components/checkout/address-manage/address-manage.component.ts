import { Validators,FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Address } from '../../model/sweets.model';
import * as $ from 'jquery';

@Component({
  selector: 'address-manage',
  templateUrl: './address-manage.component.html',
  styleUrls: ['./address-manage.component.css', './../checkout.component.css']
})
export class AddressManageComponent implements OnInit {

  selectedAddress: string;
  editExistingAddress : string
  addresses : Address[]
  exitingAddress: Address;
  constructor() { 
  }

  ngOnInit() {
      this.getAddresses()
  }

   editAddress(exstAddr: Address){
      this.editExistingAddress = 'editAddress'
      this.exitingAddress = exstAddr
  } 

 /*  selectAddress(){
    if(this.selectedAddress == 'newAddress'){

    }else{
    }
  } */

  getAddresses(){
    this.addresses = ADDRS
  }
}

export const ADDRS : Address[] = [
  {
    name: 'Satyendra Singh',
    phoneNumber: 8971564768,
    locality: 'Ramamurthy Nagar',
    city: 'Bengaluru',
    address: 'Venkateshwara Nilyam, Kempegowda underpaas road, SP Layout',
    landmark: 'Near BBMP Park',
    state : 'Karnataka',
    pincode: 560016
  },
  {
    name: 'Satyendra Singh',
    phoneNumber: 9986919325,
    locality: 'Electronic City phase 2',
    city: 'Bengaluru',
    address: 'Manohar Reddy building, G S palya road Konapana Agrahara',
    landmark: 'Behind Anugraha hospital',
    state : 'Karnataka',
    pincode: 560100
  }
]