import { Routes, RouterModule } from '@angular/router';
import { Component, NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ServiceComponent } from './service/service.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { ClassrecordComponent } from './classrecord/classrecord.component';
import { EditComponent } from './edit/edit.component';

export const routes: Routes = [
  { path: '', redirectTo: 'register', pathMatch: 'full' }, // Default redirect
  { path: 'register', component: RegistrationComponent, title: 'Register Page' },
  { path: 'profile', component: UserprofileComponent, title: 'Profile Page' },
  { path: 'record', component: ClassrecordComponent, title: 'Record Page' },
  { path: 'edit', component: EditComponent, title: 'Edit Page' },
  { path: 'service', component: ServiceComponent, title: 'Service Page' }, // Fixed typo: 'sevice' to 'service'

  // Add routes for Header and Footer components, without 'outlet'
  { path: '', component: HeaderComponent }, // This renders HeaderComponent as the default
  { path: '', component: FooterComponent } // This renders FooterComponent as the default
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}