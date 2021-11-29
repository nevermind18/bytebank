import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transferencia } from '../models/transferencia.model';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {
  private listaTransferencia: any[];
  private url = 'http://localhost:3000/transferencia'

  constructor(private httpClient: HttpClient) {
    this.listaTransferencia = [];
  }

  get transferencias(){
    return this.listaTransferencia;
  }

  todos():Observable<Transferencia[]>{
    return this.httpClient.get<Transferencia[]>(this.url)
  }

  adicionar(trasferencia: any):Observable<Transferencia>{
    this.hidratar(trasferencia)
    return this.httpClient.post<Transferencia>(this.url,trasferencia)
  }

  private hidratar(trasferencia: any){
    trasferencia.data = trasferencia = new Date()
  }

}
