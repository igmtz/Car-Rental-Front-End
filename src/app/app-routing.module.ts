import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CodePageComponent } from './code-page/code-page.component';
import { ConfirmationPageComponent } from './confirmation-page/confirmation-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { InformationPageComponent } from './information-page/information-page.component';
import { RentalPageComponent } from './rental-page/rental-page.component';

const routes: Routes = [
  {path:'', component: HomePageComponent},
  {path:'code-page', component: CodePageComponent},
  {path:'confirmation-page/:id', component: ConfirmationPageComponent},
  {path:'information-page', component: InformationPageComponent},
  {path:'rental-page', component: RentalPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
