import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotfoundErrorComponent } from './general-pages/notfound-error/notfound-error.component';
import { LocationErrorComponent } from './general-pages/location-error/location-error.component';
import { AboutComponent } from './about/about.component';
import { DistributionComponent } from './distribution/distribution.component';

const routes: Routes = [
  { path: '404', component: NotfoundErrorComponent },
  { path: 'location-error', component: LocationErrorComponent },


  {
    path: 'home', component: HomeComponent, 
    children: []
  },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },

  { path: '#about', component: AboutComponent },

  { path: 'distribution', component: DistributionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
