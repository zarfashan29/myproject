import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { FrontPage } from '../front/front';


/**
 * Generated class for the CoursePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-course',
  templateUrl: 'course.html',
})
export class CoursePage {
  password:string;
  firstname:string;

  constructor(public navCtrl: NavController) {
  }

  register(){
    this.navCtrl.push(FrontPage);
  }
   ionViewDidLoad() {
     console.log('ionViewDidLoad CoursePage');
  }

}
