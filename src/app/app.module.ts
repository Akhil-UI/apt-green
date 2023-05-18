import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgMatModule } from './appModules/ng-mat.module';

import { HeaderComponent } from './appComponents/header/header.component';
import { FooterComponent } from './appComponents/footer/footer.component';
import { SplashScreenComponent } from './appComponents/splash-screen/splash-screen.component';
import { NavbarAsideComponent } from './appComponents/navbar-aside/navbar-aside.component';
import { EmployeeComponent } from './appComponents/employee/employee.component';
import { PerformanceComponent } from './appComponents/performance/performance.component';
import { HierarchicalComponent } from './appComponents/hierarchical/hierarchical.component';
import { EscalationComponent } from './appComponents/escalation/escalation.component';
import { HolidayComponent } from './appComponents/holiday/holiday.component';
import { ReferralComponent } from './appComponents/referral/referral.component';
import { BackgroundComponent } from './appComponents/background/background.component';
import { AptitudeComponent } from './appComponents/aptitude/aptitude.component';
import { HanadbookComponent } from './appComponents/hanadbook/hanadbook.component';
import { FormsComponent } from './appComponents/forms/forms.component';
import { BirthdaysComponent } from './appComponents/birthdays/birthdays.component';
import { MainComponent } from './appComponents/main/main.component';
import { TrainingsComponent } from './appComponents/trainings/trainings.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SplashScreenComponent,
    NavbarAsideComponent,
    EmployeeComponent,
    PerformanceComponent,
    HierarchicalComponent,
    EscalationComponent,
    HolidayComponent,
    ReferralComponent,
    BackgroundComponent,
    AptitudeComponent,
    HanadbookComponent,
    FormsComponent,
    BirthdaysComponent,
    MainComponent,
    TrainingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    NgMatModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
