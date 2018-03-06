
/*  
Este componente genera un modal

Instrucciones:

1)  En el componente correspondiente donde queremos mostrar este componente,
    creamos una funcion donde vamos a setear el titulo contenido y un booleano para mostrar el modal.

    Ejemplos: 
              ////////////////////////////--------OPCION 1------///////////////////////////////
              
              /// HTML
              <button (click)="setModal('title', 'content')">mostrar modal</button>
              
              /// Component
              **** Creamos CREAMOS UNA VARIABLE POR DEFAULT OBLIGATORIO
              private dataModal: any = [{
               show: false,
               title: "",
               content: []
              }];

              **** Creamos una funcion setModal con los parametros correspondientes

              setModal(title:string, content:string){
                this.dataModal = [];
                this.dataModal.push({
                  show: true,
                  title: title,
                  content: content
                });
              }

               hiddenModal($event: boolean) {
                  this.dataModal = [];
                  this.dataModal.push({
                  show: false
                });
              }

              NOTA: Se puede implementar la logia de varias formas. solamente respeta que siempre se envian 3 datos;
              
2) En el HTML correspondiente llamamos este componente con la siguiente estructura (esto es un ejemplo con sus variables)
tienen que respetar la etiqueta <view-modal> y los (hideModal), [getModal].

<!-- Modal Component -->
        <view-modal (hideModal)="hiddenModal($event)" [getModal]="dataModal"></view-modal>
<!-- End Modal Component -->
              
3) En el Style.css
    Por favor agregue el siguiente Style osino nunca se va a poder visualizar el modal-angular

          view-modal {
            position: absolute;
            top: 8%;
            left: 20%;
          }


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

  private dataModal: any = { title: "Titulo del modal", content: "Ingrese el Contenido", show: false };

  constructor() { }

  ngOnChanges() {
    this.dataModal = this.getModal[0];
  }

  closeModal() {
    this.hideModal.emit(false);
  }

}
