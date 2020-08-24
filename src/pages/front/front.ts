import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TestProvider } from '../../providers/test/test';

/**
 * Generated class for the FrontPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-front',
  templateUrl: 'front.html',
})
export class FrontPage {
account:string;
name:string;
students: Array <any>=[
  {Name:"asad",rollno:"18"}, {Name:"anabia",rollno:"19"}, {Name:"sumaira",rollno:"33"},
]
teacher:Array <any>=
[
  {Name:"sir wasiq",rollno:"179"}, {Name:"ms.anum",rollno:"148"}, {Name:"sir khanzada",rollno:"187"},
]
  constructor(public navCtrl: NavController, public navParams: NavParams,public abc:TestProvider) {
  }

  ionViewDidLoad() {
   this.account = this.navParams.get("account");
   this.name=this.abc.getstudent();
   console.log("name",this.name);

    console.log('ionViewDidLoad FrontPage');
  }

}
