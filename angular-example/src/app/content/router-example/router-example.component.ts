import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Event, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-router-example',
  templateUrl: './router-example.component.html',
  styleUrls: ['./router-example.component.scss']
})
export class RouterExampleComponent implements OnInit {
  private saludo:any;
    // variable para el ejemplo 
    private routerExample = `
    // importar
    import { ActivatedRoute, Router, Event, NavigationEnd } from '@angular/router';

    // en el component correspondiente declarar en el constructor el route
    constructor(private _route: ActivatedRoute, private router: Router) {
    
        router.events.subscribe((event: Event) => {
            // cuando termina de cargar la page va a leer los parametos que estan en la url
            if (event instanceof NavigationEnd) {
                // en este caso vamos a leer el parametro que esta en la URL
                // que declaramos en el component AppRoutingModule en este caso pusimos :example
                let param = this._route.snapshot.paramMap.get("example");
                console.log(param);
            }
        });
    }`;
    // end variable para el ejemplo
  // Copiar desde aca
  // en el component correspondiente declarar en el constructor el route
  constructor(private _route: ActivatedRoute, private router: Router) {
  
      router.events.subscribe((event: Event) => {
          // cuando termina de cargar la page va a leer los parametos que estan en la url
          if (event instanceof NavigationEnd) {
              // en este caso vamos a leer el parametro que esta en la URL
              // que declaramos en el component AppRoutingModule en este caso pusimos :example
              this.saludo = this._route.snapshot.paramMap.get("example");
          }
      });
  }
  // Copiar hasta aca

  ngOnInit() {
  }

}
