import { Address } from './../../../model/sweets.model';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'edit-address',
  templateUrl: './edit-address.component.html',
  styleUrls: ['./../address-manage.component.css', './edit-address.component.css']
})
export class EditAddressComponent implements OnInit {

  addressForm : FormGroup
  constructor() { }
  @Input() addreess: Address

  ngOnInit() {
    this.createForm()
    this.addressForm.reset(this.addreess)
    console.log('addresses recieve:', this.addreess)
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
        console.log('invalid address form')
    }else{

    }
  }
}
