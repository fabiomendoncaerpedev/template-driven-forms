import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ConsultaCepService {

  private API = 'https://viacep.com.br/ws/';

  constructor(
    private http: HttpClient
  ) { }

  getConsultaCEP(cep: string): Observable<Object> {
    return this.http.get(`${this.API}${cep}/json`);
  }
}
