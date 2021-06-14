import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { TelaInicioComponent } from "./page/tela-inicio/tela-inicio.component";

const routes : Routes = [{ path: "", component: TelaInicioComponent }];

@NgModule({
    imports: [RouterModule.forRoot(routes)],

})
export class AppRoutingModule {}
