import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal-example.component.html',
  styleUrls: ['./modal-example.component.scss']
})
export class ModalExampleComponent implements OnInit {
  // DOCUMENTACION!!!!
  private variableObligation = ` 
  private dataModal: any = [{
    show: false,
    title: "",
    content: []
   }];`;

   private exampleFunction = `setModal(title:string, content:string){
    this.dataModal = [];
    this.dataModal.push({
      show: true,
      title: title,
      content: content
    });
  }`;
  private exampleTag = `<view-modal (hideModal)="hiddenModal($event) " [getModal]="dataModal "></view-modal>`;

  private closeFunction = `
  hiddenModal($event: boolean) {
    this.dataModal = [];
    this.dataModal.push({
    show: false
  });
}`;
  // END DOCUMENTACION 

  // Copiar desde aqui
  // Generamos una variable default obligatorio del modal-angular
  private dataModal: any = [{
    show: false,
    title: "",
    content: []
   }];

   // En esta funcion seteamos el titulo y el contenido que vamos a mostrar en el modal
   setModal(title:string, content:string){
     this.dataModal = [];
     this.dataModal.push({
       show: true,
       title: title,
       content: content
     });
   }

   // En esta funcion entra cuando cerramos el modal
    hiddenModal($event: boolean) {
       this.dataModal = [];
       this.dataModal.push({
       show: false
     });
   }
   // Copiar hasta aqui
  constructor() { }

  ngOnInit() {
  }

}
