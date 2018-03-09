// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// Components
import { AppComponent } from './app.component';
import { ModalComponent } from './content/modal/modal-angular/modal.component';
import { ModalExampleComponent } from './content/modal/modal-example/modal-example.component';
import { ListComponent } from './list/list.component';
import { ServicesApiComponent } from './content/services-api/services-api.component';
import { RouterExampleComponent } from './content/router-example/router-example.component';

// Services
import { ListService } from './list.service';
import { FormValidationComponent } from './content/form-validation/form-validation.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    ListComponent,
    ModalExampleComponent,
    ServicesApiComponent,
    RouterExampleComponent,
    FormValidationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [ListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
