import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//import { HomeComponent } from './home/';
//import { ProductosComponent } from './productos/productos.component';
//import { AcercaDeComponent } from './acerca-de/acerca-de.component';
//import { ContactoComponent } from './contacto/contacto.component';

const routes: Routes = [
 // { path: '', component: HomeComponent },
 // { path: 'productos', component: ProductosComponent },
  //{ path: 'acerca-de', component: AcercaDeComponent },
  //{ path: 'contacto', component: ContactoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
