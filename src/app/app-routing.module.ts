import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {ProjetsComponent} from './pages/projets/projets.component';
import {SalariesComponent} from './pages/salaries/salaries.component';
import {ClientsComponent} from './pages/clients/clients.component';
import {ProjetComponent} from './pages/projet/projet.component';
import {SalarieComponent} from './pages/salarie/salarie.component';
import {ClientComponent} from './pages/client/client.component';
import {CreatePComponent} from './pages/create-p/create-p.component';
import {CreateCComponent} from './pages/create-c/create-c.component';
import {CreateSComponent} from './pages/create-s/create-s.component';
import {UpdatePComponent} from './pages/update-p/update-p.component';
import {UpdateCComponent} from './pages/update-c/update-c.component';
import {UpdateSComponent} from './pages/update-s/update-s.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
  },
  {
    path:'projets',
    component:ProjetsComponent,
  },
  {
    path:'salaries',
    component:SalariesComponent,
  },
  {
    path:'clients',
    component:ClientsComponent,
  },
  {
    path:'createP',
    component:CreatePComponent,
  },
  {
    path:'createC',
    component:CreateCComponent,
  },
  {
    path:'createS',
    component:CreateSComponent,

    {
      path:'updateP',
      component:UpdatePComponent,
    },
    {
      path:'updateC',
      component:UpdateCComponent,
    },
    {
      path:'updateS',
      component:UpdateSComponent,
    },
  {
    path:'projet/:id',
    component:ProjetComponent,
  },
  {
    path:'salarie/:id',
    component:SalarieComponent,
  },
  {
    path:'client/:id',
    component:ClientComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
