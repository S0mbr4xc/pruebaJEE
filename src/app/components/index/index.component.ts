import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { cliente } from '../../domain/cliente';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {
  ci: any
  cliente: cliente = new cliente
  deudas: any

  constructor(private clienteService: ClienteService ){}

  listar(){
    this.clienteService.getCliente(this.ci).subscribe(data => {
      this.cliente = data;
    });

    this.clienteService.getDeuda().subscribe(data => {
      this.deudas = data;
      console.log(this.deudas)
    });
  }
}
