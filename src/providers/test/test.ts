import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { STATE_DESTROYED } from 'ionic-angular/umd/navigation/nav-util';

/*
  Generated class for the TestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TestProvider {
  name :string;
  constructor() {
    console.log('Hello TestProvider Provider');
  }
  getstudent(){
    return this.name;
  // console.log("gettng student data from serVER");
    
    
  }
  setstudent(name)
{
  this.name= name;
} 
 
  }



