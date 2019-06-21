import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { AboutComponent } from './pages/about/about.component';
import { NewsComponent } from './news/news.component';
import { ServicesComponent } from './pages/services/services.component';
import { InquiryComponent } from './pages/inquiry/inquiry.component';
import { JobsComponent } from './pages/jobs/jobs.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'contacts', component: ContactsComponent },
    { path: 'about', component: AboutComponent },
    { path: 'news', component: NewsComponent },
    { path: 'services', component: ServicesComponent },
    { path: 'inquiry', component: InquiryComponent },
    { path: 'jobs', component: JobsComponent },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
