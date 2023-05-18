import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SplashScreenComponent } from './appComponents/splash-screen/splash-screen.component';
import { EmployeeComponent } from './appComponents/employee/employee.component';
import { MainComponent } from './appComponents/main/main.component';
import { PerformanceComponent } from './appComponents/performance/performance.component';
import { TrainingsComponent } from './appComponents/trainings/trainings.component';
import { HierarchicalComponent } from './appComponents/hierarchical/hierarchical.component';
import { EscalationComponent } from './appComponents/escalation/escalation.component';
import { HolidayComponent } from './appComponents/holiday/holiday.component';
import { ReferralComponent } from './appComponents/referral/referral.component';
import { BackgroundComponent } from './appComponents/background/background.component';
import { AptitudeComponent } from './appComponents/aptitude/aptitude.component';
import { HanadbookComponent } from './appComponents/hanadbook/hanadbook.component';
import { FormsComponent } from './appComponents/forms/forms.component';
import { BirthdaysComponent } from './appComponents/birthdays/birthdays.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: SplashScreenComponent},
  { path: 'home', component: MainComponent},
  { path: 'employee',   component: EmployeeComponent },
  { path: 'performance',   component: PerformanceComponent },
  { path: 'trainings',   component: TrainingsComponent },
  { path: 'hierarchical',   component: HierarchicalComponent },
  { path: 'escalation',   component: EscalationComponent },
  { path: 'holiday',   component: HolidayComponent },
  { path: 'referral',   component: ReferralComponent },
  { path: 'background',   component: BackgroundComponent },
  { path: 'aptitude',   component: AptitudeComponent },
  { path: 'hanadbook',   component: HanadbookComponent },
  { path: 'forms',   component: FormsComponent },
  { path: 'birthdays',   component: BirthdaysComponent },
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
