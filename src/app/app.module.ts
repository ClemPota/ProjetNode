import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FooterComponent } from './partials/footer/footer.component';
import { HeaderComponent } from './partials/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { ClientsComponent } from './pages/clients/clients.component';
import { ClientComponent } from './pages/client/client.component';
import { ProjetsComponent } from './pages/projets/projets.component';
import { ProjetComponent } from './pages/projet/projet.component';
import { SalariesComponent } from './pages/salaries/salaries.component';
import { SalarieComponent } from './pages/salarie/salarie.component';
import { CreatePComponent } from './pages/create-p/create-p.component';
import { UpdatePComponent } from './pages/update-p/update-p.component';
import { CreateSComponent } from './pages/create-s/create-s.component';
import { UpdateSComponent } from './pages/update-s/update-s.component';
import { CreateCComponent } from './pages/create-c/create-c.component';
import { UpdateCComponent } from './pages/update-c/update-c.component';

import {ProjetsService} from './services/projets.service';
import {ClientsService} from './services/clients.service';
import {SalariesService} from './services/salaries.service';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    ClientsComponent,
    ClientComponent,
    ProjetsComponent,
    ProjetComponent,
    SalariesComponent,
    SalarieComponent,
    CreatePComponent,
    UpdatePComponent,
    CreateSComponent,
    UpdateSComponent,
    CreateCComponent,
    UpdateCComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ProjetsService,
    ClientsService,
    SalariesService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
