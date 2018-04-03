import { Component, OnInit } from '@angular/core';
import { UploadFile } from '../../models/UploadFile';
import * as _ from "lodash";

@Component({
  selector: 'app-drop-file',
  templateUrl: './drop-file.component.html',
  styleUrls: ['./drop-file.component.scss']
})
export class DropFileComponent{

  imageUpload: UploadFile;
  dropzoneActive: boolean = false;
  public files;

  private exampleDirective = `
  import { Directive, EventEmitter, HostListener, Output } from '@angular/core';
  @Directive({
    selector: '[fileDrop]'
  })
  export class FileDropDirective {
  
    @Output() filesDropped = new EventEmitter<FileList>();
    @Output() filesHovered = new EventEmitter<boolean>();
  
    constructor() { }
  
    @HostListener('drop', ['$event'])
    onDrop($event) {
      $event.preventDefault();
      let transfer = $event.dataTransfer;
      this.filesDropped.emit(transfer.files);
      this.filesHovered.emit(false);
    }
  
    @HostListener('dragover', ['$event'])
    onDragOver($event) {
      event.preventDefault();
      this.filesHovered.emit(true);
    }
    
    @HostListener('dragleave', ['$event'])
    onDragLeave($event) {
      this.filesHovered.emit(false);
    }
  }`;

  private exampleComponent = `
import { Component, OnInit } from '@angular/core';
import { UploadFile } from '../../models/UploadFile';
import * as _ from "lodash";

@Component({
  selector: 'app-drop-file',
  templateUrl: './drop-file.component.html',
  styleUrls: ['./drop-file.component.scss']
})
export class DropFileComponent{

  imageUpload: UploadFile;
  dropzoneActive: boolean = false;
  public files;
  // hover file true 
  dropzoneState($event: boolean) {
    this.dropzoneActive = $event;
  }

  // Subir archivo
  handleDrop(fileList: FileList) {

    // aca va a recorrer la lista de los archivos que arrastramos o va a tomar el unico archivo que arrastramos
    let filesIndex = _.range(fileList.length);
    this.files = [];
    _.each(filesIndex, (idx) => {
      // guardamos la lista de los archivos en una variable para poderlo mostrarlo en la web
      this.files.push(new UploadFile(fileList[idx]));
    });
    console.log(this.files);
  }
}
  `;

  private exampleComponentHtml = `
  /////////////////////////////// HTML ///////////////////////////////
  <div class="box">
    <div class="dropzone" fileDrop (filesDropped)="handleDrop($event)" (filesHovered)="dropzoneState($event)" [ngClass]="{'active': dropzoneActive}">
      Drag and Drop File
    </div>
  </div>
  
  /////////////////////////////// SASS ///////////////////////////////
  .box {
    margin-top: 15px;
    width: 100%;
    height: 100px;
    background: rgb(97, 97, 97);
    border-radius: 10px;
    cursor: pointer;
    .dropzone {
        text-align: center;
        padding-top: 2%;
        width: 100%;
        height: 100%;
    }
    .dropzone.active {
        border: 1px solid rgb(131, 131, 131);
        color: rgb(131, 131, 131);
        border-radius: 10px;
    }
  }`;

  private exampleModels = `
  export class UploadFile {
    $key: string;
    file: File;
    name: string;
    url: string;
    progress: number;
    createdAt: Date = new Date();
    constructor(file: File) {
        this.file = file;
    }
}
  `;

  constructor() { }

  // hover file true 
  dropzoneState($event: boolean) {
    this.dropzoneActive = $event;
  }

  // Subir archivo
  handleDrop(fileList: FileList) {

    // aca va a recorrer la lista de los archivos que arrastramos o va a tomar el unico archivo que arrastramos
    let filesIndex = _.range(fileList.length);
    this.files = [];
    _.each(filesIndex, (idx) => {
      // guardamos la lista de los archivos en una variable para poderlo mostrarlo en la web
      this.files.push(new UploadFile(fileList[idx]));
    });
    console.log(this.files);
  }
}