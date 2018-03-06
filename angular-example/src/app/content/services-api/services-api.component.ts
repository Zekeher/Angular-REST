import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services-api',
  templateUrl: './services-api.component.html',
  styleUrls: ['./services-api.component.scss']
})
export class ServicesApiComponent implements OnInit {
  private exampleServices = `
  import { Injectable } from '@angular/core';
  import { Http, RequestOptions, RequestOptionsArgs, Headers } from '@angular/http';
  import { Observable } from 'rxjs';
  import 'rxjs/Rx';
  
  @Injectable()
  export class NameServices {
  
      constructor(private _http: Http) { }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      // Methodo POST
/////////////////////////////////////////////////////////
      // funcion services metodo POST
      postServices(param: any): Observable<Response> {
        let urlServices = "https://blablabla.com";
        let content = param; // aca va el contenido del body segun si el methodo que usemos sea POST o PUT
        let keyAPI = "keyAPI";
        let headers = new Headers();

        // seteamos el header del services con los datos correspondientes (esto es un ejemplo)
        headers.append('Cache-Control', 'no-cache');
        headers.append('Authorization', 'Basic ' + keyAPI);
        headers.append('Content-Type', 'application/json');

        let options = new RequestOptions({ headers: headers });

        return this._http.post(urlServices, content, options)
            .map(response => {
                let data = response.json();
                return data;
            })
    }
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      // Methodo GET
/////////////////////////////////////////////////////////
        // funcion services metodo GET
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

          return this._http.get(urlServices, options)
              .map(response => {
                  let data = response.json();
                  return data;
              })
      }
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      // Methodo PUT
/////////////////////////////////////////////////////////
        // funcion services metodo PUT
        putServices(param: any): Observable<Response> {
          let urlServices = "https://blablabla.com";
          let content = param; // aca va el contenido del body segun si el methodo que usemos sea POST o PUT
          let keyAPI = "keyAPI";
          let headers = new Headers();

          // seteamos el header del services con los datos correspondientes (esto es un ejemplo)
          headers.append('Cache-Control', 'no-cache');
          headers.append('Authorization', 'Basic ' + keyAPI);
          headers.append('Content-Type', 'application/json');

          let options = new RequestOptions({ headers: headers });

          return this._http.put(urlServices, content, options)
              .map(response => {
                  let data = response.json();
                  return data;
              })
      }
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      // Methodo DELETE
/////////////////////////////////////////////////////////
      // funcion services metodo DELETE
      deleteServices(param: any): Observable<Response> {
        let urlServices = "https://blablabla.com";
        let content = param; // aca va el contenido del body segun si el methodo que usemos sea POST o PUT
        let keyAPI = "keyAPI";
        let headers = new Headers();

        // seteamos el header del services con los datos correspondientes (esto es un ejemplo)
        headers.append('Cache-Control', 'no-cache');
        headers.append('Authorization', 'Basic ' + keyAPI);
        headers.append('Content-Type', 'application/json');

        let options = new RequestOptions({ headers: headers });

        return this._http.delete(urlServices, content, options)
            .map(response => {
                let data = response.json();
                return data;
            })
    }
  }`;

  private exampleComponent = `
  import { NameServices } from '../services/name.service';
  
  @Component({
      selector: 'app-nameComponent',
      templateUrl: './nameComponent.component.html',
      styleUrls: ['./nameComponent.component.scss']
  })
  export class nameComponent implements OnInit {

      // declaramos el Services en el constructor
      constructor(private _nameServices: NameServices) {}
  
      //creamos una funcion que le pegue al Services deseado
      //en este caso vamos a pegarle al services con Metodo GET
      functionName(param:any) {
          this._nameServices.getServices(param).subscribe(
              (data) => {
                  console.log(data);
              })
      }
  }`;
  constructor() { }

  ngOnInit() {
  }

}
