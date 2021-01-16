import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ApplicationsComponent } from './components/applications/applications.component';
import { FaqComponent } from './components/faq/faq.component';
import { GoProbateMainInformationComponent } from './components/go-probate-main-information/go-probate-main-information.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PaymentHistoryComponent } from './components/payment-history/payment-history.component';
import { PersonalInfoComponent } from './components/personal-info/personal-info.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { TermsAndConditionsComponent } from './components/terms-and-conditions/terms-and-conditions.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/main' },
  { path: 'main', component: GoProbateMainInformationComponent},
  { path: 'sign-in', component: SignInComponent},
  { path: 'personal-info', component: PersonalInfoComponent},
  { path: 'applications/:type', component: ApplicationsComponent},
  { path: 'payment-history', component: PaymentHistoryComponent},
  { path: 'faq', component: FaqComponent},
  { path: 'privacy-policy', component: PrivacyPolicyComponent},
  { path: 'terms-and-conditions', component: TermsAndConditionsComponent},
  { path: '**',  component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
