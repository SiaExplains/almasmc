import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { AboutComponent } from './pages/about/about.component';
import { NewsComponent } from './news/news.component';
import { ServicesComponent } from './pages/services/services.component';
import { InquiryComponent } from './pages/inquiry/inquiry.component';
import { JobsComponent } from './pages/jobs/jobs.component';
import { DoorToDoorComponent } from './pages/door-to-door/door-to-door.component';
import { TranslatorComponent } from './pages/translator/translator.component';
import { ClearanceComponent } from './pages/clearance/clearance.component';
import { SourcingComponent } from './pages/sourcing/sourcing.component';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'contacts', component: ContactsComponent },
    { path: 'about', component: AboutComponent },
    { path: 'news', component: NewsComponent },
    { path: 'services', component: ServicesComponent },
    { path: 'inquiry', component: InquiryComponent },
    { path: 'jobs', component: JobsComponent },
    { path: 'door-to-door', component: DoorToDoorComponent },
    { path: 'translator', component: TranslatorComponent },
    { path: 'clearance', component: ClearanceComponent },
    { path: 'sourcing', component: SourcingComponent },
    { path: 'login', component: LoginComponent}
  ];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
