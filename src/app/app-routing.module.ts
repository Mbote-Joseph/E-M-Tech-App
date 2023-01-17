import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './components/details/details.component';
// import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { InsurancetypeComponent } from './components/insurancetype/insurancetype.component';
import { PersonaldetailsComponent } from './components/personaldetails/personaldetails.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: InsurancetypeComponent },

  // { path: '/dashboard', component: DashboardComponent },
  { path: 'insurancetype', component: InsurancetypeComponent },
  { path: 'details', component: PersonaldetailsComponent },
  { path: 'checkdetails', component: DetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
