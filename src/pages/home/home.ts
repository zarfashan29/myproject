import { Component } from '@angular/core';
import { NavController, Ion } from 'ionic-angular';
import { FrontPage } from '../front/front';
import { TestProvider } from '../../providers/test/test';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
account:string;
password:string;

  constructor(public navCtrl: NavController,public service1 : TestProvider) {
    
    }

  
 login(){
  //  if(this.account=="zarfashan"&& this.password=="zaro"){
    this.navCtrl.push(FrontPage );
    this.service1.setstudent("zarfashan");
   //}
  // else{
  //alert("OOps!! it feels like your enter wrong accountname or password..  ");
  //  console.log(this.login);
  // }
}}
