import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';

import { CompanyListComponent } from './components/company-list/company-list.component';
import { CompanyDetailsComponent } from './components/company-details/company-details.component';
import { AddCompanyComponent } from './components/add-company/add-company.component';

import { SubdivisionListComponent } from './components/subdivision-list/subdivision-list.component';
import { SubdivisionDetailsComponent } from './components/subdivision-details/subdivision-details.component';
import { AddSubdisisionComponent } from './components/add-subdisision/add-subdisision.component';

import { AOrderListComponent } from './components/aorder-list/aorder-list.component';
import { AOrderDetailsComponent } from './components/aorder-details/aorder-details.component';
import { AddOrderComponent } from './components/add-order/add-order.component';

import { EOrderListComponent } from './components/eorder-list/eorder-list.component';
import { EOrderDetailsComponent } from './components/eorder-details/eorder-details.component';

const routes: Routes = [

  { path: 'user/eorder', component: EOrderListComponent },
  { path: 'user/eorder/:id', component: EOrderDetailsComponent },


  { path: 'user/aorder', component: AOrderListComponent },
  { path: 'user/aorder/:id', component: AOrderDetailsComponent },
  { path: 'user/aorders/add', component: AddOrderComponent },

  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'user/company', component: CompanyListComponent },
  { path: 'user/subdivisions', component: SubdivisionListComponent },

  { path: 'mod/company', component: CompanyListComponent },
  { path: 'mod/company/:id', component: CompanyDetailsComponent },
  { path: 'mod/companys/add', component: AddCompanyComponent },

  { path: 'mod/subdivision', component: SubdivisionListComponent },
  { path: 'mod/subdivision/:id', component: SubdivisionDetailsComponent },
  { path: 'mod/subdivisions/add', component: AddSubdisisionComponent }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
