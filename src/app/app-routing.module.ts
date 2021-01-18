import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ApplicationsComponent } from './components/applications/applications.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { FaqComponent } from './components/faq/faq.component';
import { GoProbateMainInformationComponent } from './components/go-probate-main-information/go-probate-main-information.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PaymentHistoryComponent } from './components/payment-history/payment-history.component';
import { PaymentComponent } from './components/payment/payment.component';
import { PersonalInfoComponent } from './components/personal-info/personal-info.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { StartApplicationComponent } from './components/start-application/start-application.component';
import { TermsAndConditionsComponent } from './components/terms-and-conditions/terms-and-conditions.component';
import { CurrentUserResolverService } from './services/current-user-resolver.service';
import { RedirectLoggedInToService } from './services/redirect-logged-in-to.service';
import { RedirectUnauthorizedToService } from './services/redirect-unauthorized-to.service';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/main' },
  { path: 'main', component: GoProbateMainInformationComponent},
  { path: 'sign-in', component: SignInComponent, canActivate: [RedirectLoggedInToService]},
  { path: 'create-account', component: CreateAccountComponent, canActivate: [RedirectLoggedInToService]},
  { path: 'start-application', component: StartApplicationComponent, canActivate: [RedirectUnauthorizedToService] },
  { path: 'personal-info', component: PersonalInfoComponent, canActivate: [RedirectUnauthorizedToService] },
  { path: 'applications/:type', component: ApplicationsComponent, canActivate: [RedirectUnauthorizedToService]},
  { path: 'payment-history', component: PaymentComponent, canActivate: [RedirectUnauthorizedToService]},
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
