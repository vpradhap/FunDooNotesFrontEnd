import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './Authguard/authentication.guard';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgetpasswordComponent } from './components/forgetpassword/forgetpassword.component';
import { GetAllNotesComponent } from './components/get-all-notes/get-all-notes.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';

const routes: Routes = [
    {path:'',redirectTo:'login',pathMatch:'full'},
    {path:'registration',component:RegistrationComponent},
    {path:'login',component:LoginComponent},
    {path:'forgetpassword',component:ForgetpasswordComponent},
    {path:'resetpassword/:token',component:ResetpasswordComponent},
    {path:'dashboard',component:DashboardComponent,canActivate:[AuthenticationGuard],
    children:[
      {path:'getallnotes',component:GetAllNotesComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
