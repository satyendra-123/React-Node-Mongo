import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Address } from '../../../model/sweets.model';

@Component({
  selector: 'new-address',
  templateUrl: './new-address.component.html',
  styleUrls: [ './../address-manage.component.css', './new-address.component.css']
})
export class NewAddressComponent implements OnInit {

  constructor() { }
  addressForm: FormGroup
  states : string[] = STATES
  ngOnInit() {
    this.createForm()
  }

  createForm(){
    this.addressForm = new FormGroup({
       'name' : new FormControl('', Validators.required),
       'phoneNumber' : new FormControl('', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
       'pincode' : new FormControl('', [Validators.required, Validators.pattern('^\\d+$')]),
       'locality' : new FormControl('', Validators.required),      
       'state' : new FormControl(''),
       'city' : new FormControl('', Validators.required),
       'delievryTime' : new FormControl(''),
       'landmark' : new FormControl(''),
       'address' : new FormControl('', Validators.required)
    })    
  }

  onSubmit(){
    if(!this.addressForm.valid){
        console.log('not a valid form')
    }else{
      this.prepareAddress()
    }
  }

  prepareAddress(){
    let address : Address = new Address()
    let name =   this.addressForm.value.name;
  }
}

export const STATES = [
  "Andaman &amp; Nicobar Islands", "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar",
  "Chandigarh", "Chhattisgarh", "Dadra &amp; Nagar Haveli", "Daman and Diu", "Delhi", "Goa",
  "Gujarat", "Haryana", "Himachal Pradesh", "Jammu &amp; Kashmir", "Jharkhand", "Karnataka",
  "Kerala", "Lakshadweep", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
  "Nagaland", "Odisha", "Puducherry", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana",
  "Tripura", "Uttarakhand", "Uttar Pradesh", "West Bengal"
]