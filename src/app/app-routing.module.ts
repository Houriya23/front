import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelpLineComponent } from './help-line/help-line.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ListOfEmployeesComponent } from './list-of-employees/list-of-employees.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  { path: 'home', component: HomePageComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'helpLine', component: HelpLineComponent },
  { path: 'service/:job', component: ListOfEmployeesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
