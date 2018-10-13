import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Injectable } from "@angular/core";
import { Cart } from "../model/sweets.model";
import { User } from '../model/user.model';

@Injectable()
export class DataShareSvc{
    constructor(){
    }
    cart : BehaviorSubject<Cart> = new BehaviorSubject<Cart>(new Cart());    
    user: BehaviorSubject<User> = new BehaviorSubject<User>(new User());
}