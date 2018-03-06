// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

// Components
import { AppComponent } from './app.component';
import { ModalComponent } from './content/modal/modal-angular/modal.component';
import { ModalExampleComponent } from './content/modal/modal-example/modal-example.component';
import { ListComponent } from './list/list.component';
import { ServicesApiComponent } from './content/services-api/services-api.component';

// Services
import { ListService } from './list.service';



@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    ListComponent,
    ModalExampleComponent,
    ServicesApiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [ListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
