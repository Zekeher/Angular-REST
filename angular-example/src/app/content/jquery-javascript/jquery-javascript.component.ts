import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jquery-javascript',
  templateUrl: './jquery-javascript.component.html',
  styleUrls: ['./jquery-javascript.component.scss']
})
export class JqueryJavascriptComponent implements OnInit {

  constructor() { }
  private exampleAngularCli = `
  "scripts": [
    "../node_modules/jquery/dist/jquery.min.js",
    "../node_modules/bootstrap/dist/js/bootstrap.min.js"
  ],
  `;
  ngOnInit() {
  }

}
