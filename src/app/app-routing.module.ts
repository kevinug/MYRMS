import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: DashboardComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule {}
