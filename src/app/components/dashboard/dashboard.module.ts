import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ClientesComponent } from './clientes/clientes.component';
import { PropiedadesComponent } from './propiedades/propiedades.component';
import { EscrowComponent } from './escrow/escrow.component';
import { CrearClienteComponent } from './clientes/crear-cliente/crear-cliente.component';
import { CrearPropiedadesComponent } from './propiedades/crear-propiedades/crear-propiedades.component';


@NgModule({
  declarations: [
    DashboardComponent,
    InicioComponent,
    NavbarComponent,
    ClientesComponent,
    PropiedadesComponent,
    EscrowComponent,
    CrearClienteComponent,
    CrearPropiedadesComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
