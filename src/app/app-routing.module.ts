import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplicationsComponent } from './components/applications/applications.component';
import { PaymentHistoryComponent } from './components/payment-history/payment-history.component';
import { PersonalInfoComponent } from './components/personal-info/personal-info.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'personal-info', component: PersonalInfoComponent },
  { path: 'applications/:type', component: ApplicationsComponent },
  { path: 'payment-history', component: PaymentHistoryComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
