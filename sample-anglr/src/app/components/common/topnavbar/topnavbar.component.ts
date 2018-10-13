import { Component, OnInit } from '@angular/core';
import { DataShareSvc } from '../../services/DataShareSvc';
import { User } from '../../model/user.model';

@Component({
  selector: 'topnavbar',
  templateUrl: './topnavbar.component.html',
  styleUrls: ['./topnavbar.component.css']
})
export class TopnavbarComponent implements OnInit {

  user: User
  constructor(private dataSvc: DataShareSvc) { 
    this.dataSvc.user.subscribe(usr=>{
        if(null != usr){
          this.user = usr  
          console.log('test logger user data '+this.user.image)
        }
    })
  }

  ngOnInit() {
    console.log('test logger user data '+this.user.image)
  }

}
