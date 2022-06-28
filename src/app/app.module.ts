import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { AddCompanyComponent } from './components/add-company/add-company.component';
import { CompanyDetailsComponent } from './components/company-details/company-details.component';
import { CompanyListComponent } from './components/company-list/company-list.component';
import { AddSubdisisionComponent } from './components/add-subdisision/add-subdisision.component';
import { SubdivisionDetailsComponent } from './components/subdivision-details/subdivision-details.component';
import { SubdivisionListComponent } from './components/subdivision-list/subdivision-list.component';
import { AddOrderComponent } from './components/add-order/add-order.component';
import { AOrderDetailsComponent } from './components/aorder-details/aorder-details.component';
import { AOrderListComponent } from './components/aorder-list/aorder-list.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    AddCompanyComponent,
    CompanyDetailsComponent,
    CompanyListComponent,
    AddSubdisisionComponent,
    SubdivisionDetailsComponent,
    SubdivisionListComponent,
    AddOrderComponent,
    AOrderDetailsComponent,
    AOrderListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
