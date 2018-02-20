// https://github.com/Zekeher/Angular-REST.git

// Crear una funcion para pegarle al services deseado
// Importar las librerias correspondientes para el API


import { Injectable } from '@angular/core';
import { Http, RequestOptions, RequestOptionsArgs, Headers } from '@angular/http';
import { Observable } from 'rxjs';

// Esto es un services.ts de Angular

@Injectable()
export class NameServices {

    constructor(private _http: Http) { }
    // nombre de la function
    getServices(param: any): Observable<Response> {
        let urlServices = "https://blablabla.com";
        let content = param; // aca va el contenido del body segun si el methodo que usemos sea POST o PUT
        let keyAPI = "keyAPI";
        let headers = new Headers();
        // seteamos el header del services con los datos correspondientes (esto es un ejemplo)
        headers.append('Cache-Control', 'no-cache');
        headers.append('Authorization', 'Basic ' + keyAPI);
        headers.append('Content-Type', 'application/json');

        let options = new RequestOptions({ headers: headers });

        //llamamos al servicio
        return this._http.post(urlServices, content, options)
            .map(response => {
                let data = response.json();
                return data;
            })
    }
}


/// CREAMOS UN COMPONENTE o DEL COMPONENTE YA CREADO
// importamos el services para poderlo llamar

import { nameServices } from '../services/name.service';

@Component({
    selector: 'app-nameComponent',
    templateUrl: './nameComponent.component.html',
    styleUrls: ['./nameComponent.component.scss']
})
export class nameComponent implements OnInit {
    // declaramos el Services en el constructor
    constructor(private _nameServices: NameServices) {}

    //creamos una funcion que le pegue al Services deseado
    functionName() {
        let param = data;
        this._nameServices.getServices(param).subscribe(
            (data) => {
                console.log(data);
            })
    }
}


