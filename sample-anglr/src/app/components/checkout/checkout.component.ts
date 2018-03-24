import { Component, OnInit, Input, Output, EventEmitter, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit, AfterViewInit {

  @ViewChild('nextstep') public next_step:ElementRef;
  @ViewChild('prevstep') public prev_step:ElementRef;
  @ViewChild('navtabs') public navtabs:ElementRef;

  constructor() { 
  }

  ngOnInit() {
  /*   $(window).click(function () {
      alert('ok');
      }); */
      //this.init()
  }

  ngAfterViewInit(){

  }

/*   init(){
    (<any>$('.nav-tabs > li a[title]')).tooltip();
    this.hasDisabled((<any>$('a[data-toggle="tab"]')).on('show.bs.tab'));
  }

 hasDisabled(e) : boolean{ 
    var $target = <any>$(e.target);
    if ($target.parent().hasClass('disabled')) {
        return false;
    }
 }
 */

  saveAndCont(){
    //this.next_step.nativeElement.click()
    var $active = this.navtabs.nativeElement.querySelector('li>a.active')
    //console.log(<any>$active)
    $active.parentElement.nextElementSibling.firstElementChild.classList.remove('disabled')
    this.nextTab($active);
  }

  prevStep(){
    //this.prev_step.nativeElement.click();
      var $active = this.navtabs.nativeElement.querySelector('li>a.active')
      this.prevTab($active);
  }

  nextTab(elem) {
      elem.parentElement.nextElementSibling.querySelector('a[data-toggle="tab"]').click()
  }

  prevTab(elem) {
    elem.parentElement.previousElementSibling.querySelector('a[data-toggle="tab"]').click();
  }

}
