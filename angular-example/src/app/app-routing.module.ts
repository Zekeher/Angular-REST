import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { ModalExampleComponent } from './content/modal/modal-example/modal-example.component';
import { ServicesApiComponent } from './content/services-api/services-api.component'
import { RouterExampleComponent } from './content/router-example/router-example.component';
import { FormValidationComponent } from './content/form-validation/form-validation.component';
import { DropFileComponent } from './content/drop-file/drop-file.component';
import { JqueryJavascriptComponent } from './content/jquery-javascript/jquery-javascript.component';



const routes: Routes = [
    { path: '', component: ListComponent },
    { path: 'modal-angular', component: ModalExampleComponent },
    { path: 'services-api', component: ServicesApiComponent }, 
    { path: 'router/:example', component: RouterExampleComponent },  
    { path: 'form-validation', component: FormValidationComponent }, 
    { path: 'drop-file', component: DropFileComponent }, 
    { path: 'jquery', component: JqueryJavascriptComponent },
    { path: '**', redirectTo: '' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }