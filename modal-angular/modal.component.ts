
/*  
Este componente genera un modal

Instrucciones:

1)  En el componente correspondiente donde queremos mostrar este componente,
    creamos una funcion donde vamos a setear el titulo contenido y un booleano para mostrar el modal.

    Ejemplos: 

              ////////////////////////////--------OPCION 1------///////////////////////////////
              
              /// HTML
              <button (click)="setModal('title', 'content', 'true')">mostrar modal</button>
              
              /// Component
              **** Creamos 3 "variables"
              private ingresarTitulo: string;
              private ingresarContenido: string;
              private ingresarBoolean: boolean;

              **** Creamos una funcion setModal con los parametros correspondientes

              setModal(title:string, content:string, show:boolean){
                this.ingresarTitulo = title;
                this.ingresarContenido = content;
                this.ingresarBoolean = show; // tenemos que ingresar true para que se muestre el modal
              }

              ocultarModal($event: boolean){
                  this.ingresarBoolean = $event; // recibimos un false para que se oculte el modal
              }

              ////////////////////////////--------OPCION 2------///////////////////////////////
              
              /// HTML
              <button (click)="setModal(title, content)">mostrar modal</button>

              /// Component
              **** Creamos 3 "variables"
              private ingresarTitulo: string;
              private ingresarContenido: string;
              private ingresarBoolean: boolean;

              **** Creamos una funcion setModal con los parametros correspondientes

              setModal(title:string, content:string){
                this.ingresarTitulo = title;
                this.ingresarContenido = content;
                this.ingresarBoolean = true;
              }

              ocultarModal($event: boolean){
                  this.ingresarBoolean = $event; // recibimos un false para que se oculte el modal
              }

              NOTA: Se puede implementar la logia de varias formas. solamente respeta que siempre se envian 3 datos;
              
2) En el HTML correspondiente llamamos este componente con la siguiente estructura (esto es un ejemplo con sus variables)
tienen que respetar la etiqueta <view-modal> y los [titleModal], [contentModal], [showModal].

              <view-modal 
              [titleModal]="ingresarTitulo" 
              [contentModal]="ingresarContenido" 
              [showModal]="ingresarBoolean"
              (hideModal)="ocultarModal($event)">
              </view-modal>
              
by Ezequiel 'Zekeher' Hermoso
*/

import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';

@Component({
  selector: 'view-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  @Input() getModal: any;
  @Output() hideModal = new EventEmitter<boolean>();

  private dataModal: any = { title: "Titulo", content: "Contenido", view: "", htmlModal: false, show: false };
  private show: boolean = false;
  private modalTemplateHTML: boolean = false;

  constructor() { }

  ngOnChanges() {
    this.dataModal = this.getModal[0];
    this.show = this.getModal[0].show;
  }

  closeModal() {
    this.hideModal.emit(false);
  }

}
