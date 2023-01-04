import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpaceComponent } from './core/space/space.component';
import { PlanetComponent } from './core/planet/planet.component';

const routes: Routes = [
  {
    path: '',
    component : SpaceComponent ,
    children: [
      {path: 'planet/:name', component: PlanetComponent}]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
