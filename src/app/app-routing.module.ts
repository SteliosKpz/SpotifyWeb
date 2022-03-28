import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { TrackLookupComponent } from './track-lookup/track-lookup.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path:'',component:HomePageComponent},
  {path:'track-lookup',component:TrackLookupComponent},
  {path:'about',component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
