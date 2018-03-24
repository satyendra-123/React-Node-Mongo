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
