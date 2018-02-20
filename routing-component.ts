// vamos a tener un ts Componente que van a tener nuestras rutas configuradas
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NameComponent } from './app/name.component';


const routes: Routes = [
    { path: '', component: AppComponent },
    { path: 'name/:id', component: NameComponent },
    { path: '**', redirectTo: '' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

// importar
import { ActivatedRoute, Router, Event, NavigationEnd } from '@angular/router';

// en el component correspondiente declarar en el constructor el route
constructor(private _route: ActivatedRoute, private router: Router) {

    router.events.subscribe((event: Event) => {
        // cuando termina de cargar la page va a ller los parametos que estan en la url
        if (event instanceof NavigationEnd) {
            // en este caso vamos a leer el parametro ID que esta en la URL
            // que declaramos en el component AppRoutingModule
            let id = +this._route.snapshot.paramMap.get("id");
            console.log(id);
        }
    });
}

// lo declaramos en app.module.ts

import { AppRoutingModule } from './app-routing.module';

declarado en  imports: AppRoutingModule

