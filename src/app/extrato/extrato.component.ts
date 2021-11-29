import { Transferencia } from './../models/transferencia.model';

import { TransferenciaService } from './../server/transferencia.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

  transferencias:any[] = [];

  constructor(private service: TransferenciaService) { }

  ngOnInit(): void {
    this.service.todos().subscribe((transferencias: Transferencia[]) => {
      this.transferencias = transferencias;
    });
  }

}
