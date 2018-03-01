import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable";

@Injectable()
export class BackendService{
    constructor(private http: HttpClient){}

    getSweets(): Observable<any>{
        return  this.http.get('/api/sweets')
    }

    getSweetsForId(id : any):Observable<any>{
        return  this.http.get('/api/sweets/'+id)
    }
}