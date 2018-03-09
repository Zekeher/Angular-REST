import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.scss']
})
export class FormValidationComponent {

  // aca vamos a encontrar el contenido del formulario cuando es valido
  onFormSubmit(nameForm: NgForm) {
    console.log(nameForm.value)
    let data = nameForm.value;
    this.setModal(data.title, data.content);
  }
  constructor() { }

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

  

}
