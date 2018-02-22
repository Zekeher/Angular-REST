/////////////////////////////////////////////
component HTML para llamar el modal
/////////////////////////////////////////////
<!-- Modal Component -->
<view-modal (hideModal)="hiddenModal($event)" [getModal]="dataModal"></view-modal>
<!-- End Modal Component -->

Para llamarlo atravez de un link o button asignar en el html la funcion "(click)="setModal('modal-1')"


/////////////////////////////////////////////
component TS como mandar informacion desde el componente deseado
/////////////////////////////////////////////
1) crear una variable con los siguientes parametros por default

  private dataModal: any = [{
    show: false,
    title: "",
    content: []
  }];

2) dentro de una funcion para llamar al modal por lo siguiente;
setModal(param: string) {
this.dataModal = []; // Es para vaciar el contenido de dataModal

// por si tenemos varias modal en una pantalla es deseable agregar los if con los parametros correspondientes
 if (param === 'modal-1') {
      this.dataModal.push({
        show: true,
        title: "titulo modal",
        content: "blblablabla"
      })
    }

    if (param === 'modal-2') {
      this.dataModal.push({
        show: true,
        title: "titulo modal 2 ",
        content: "blblablabla 2"
      })
    }

}


3) para que cierre el modal con el Output

  hiddenModal($event: boolean) {
    this.dataModal = [];
    this.dataModal.push({
      show: false
    });
  }