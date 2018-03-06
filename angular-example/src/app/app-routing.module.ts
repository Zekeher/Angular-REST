import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { ModalExampleComponent } from './content/modal/modal-example/modal-example.component';
import { ServicesApiComponent } from './content/services-api/services-api.component'


const routes: Routes = [
    { path: '', component: ListComponent },
    { path: 'modal-angular', component: ModalExampleComponent },
    { path: 'services-api', component: ServicesApiComponent },    
    { path: '**', redirectTo: '' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }