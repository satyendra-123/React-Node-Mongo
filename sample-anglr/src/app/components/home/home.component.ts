import { BackendService } from './../services/backend.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private backendSvc: BackendService) { }
  
  error: boolean = false
  errorMessage : string
  successMessage : string
  sweets : any[];
  selectedSwts : any[] = new Array()

  ngOnInit() {
    this.getSweets()
    //this.getDataForId()
  }

  getSweets(){
    this.error = false
    this.backendSvc.getSweets().subscribe(res=>{
      console.log('sweets response ',res) 
      this.sweets = res
      this.successMessage = 'We have got taste for you from backend:'
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
    if(!this.selectedSwts.includes(swt, 0)){
        this.selectedSwts.push(swt)
    }
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
