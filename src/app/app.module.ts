import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MaiorIdadeDirective } from './directives/maior-idade.directive';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { SucessoCadastroComponent } from './sucesso-cadastro/sucesso-cadastro.component';
import { MessagesComponent } from './components/messages/messages.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, CadastroComponent, SucessoCadastroComponent, MessagesComponent, MaiorIdadeDirective],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
