import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { FrontPage } from '../pages/front/front';
import { CoursePage } from '../pages/course/course';
import { TeacherPage } from '../pages/teacher/teacher';
import { TestProvider } from '../providers/test/test';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
     FrontPage,
     CoursePage,
     TeacherPage,
     
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FrontPage,
    CoursePage,
    TeacherPage,
    

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TestProvider
  ]
})
export class AppModule {}
