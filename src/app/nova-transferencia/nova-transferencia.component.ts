import { Router } from '@angular/router';
import { TransferenciaService } from './../server/transferencia.service';
import { Component, Output, EventEmitter } from "@angular/core";

@Component({
    selector:'app-nova-transferencia',
    templateUrl:'./nova-transferencia.component.html',
    styleUrls:['./nova-transferencia.component.scss']

})
export class NovaTransferenciaComponent{

  @Output() aoTransferir = new EventEmitter<any>();

  constructor(private service: TransferenciaService, private router: Router){

  }

  valor?: Number;
  destino?: Number;


  transferir(){
    const valorEmitir = { valor: this.valor, destino: this.destino };
    this.service.adicionar(valorEmitir).subscribe((resultado) => {
      this.router.navigateByUrl("extrato")
    },
    (error) =>
      console.log(console.error())
    );
  }

  limpar(){
    this.valor = 0;
    this.destino = 0;
  }
}
