import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from '@core/inicio/inicio.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "inicio",
    pathMatch: "full"
  },
  {
    path: '',
    component: InicioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
