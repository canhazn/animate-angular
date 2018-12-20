import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProfileComponent } from './profile/profile.component';
import { BookComponent } from './book/book.component';

const routes: Routes = [
	{path: '', redirectTo:'/home', pathMatch: 'full'},
	{path: 'home', component: HomeComponent, data: {animation: 'HomePage'}},
	{path: 'about', component: AboutComponent, data: {animation: 'AboutPage'}},
	{path: 'profile', component: ProfileComponent},
	{path: 'book', component: BookComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
