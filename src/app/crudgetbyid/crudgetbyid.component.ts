import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductosService } from '../service/crud.service';

@Component({
  selector: 'app-crudgetbyid',
  standalone: false,
  templateUrl: './crudgetbyid.component.html',
  styleUrl: './crudgetbyid.component.css'
})
export class CrudgetbyidComponent {
  producto: any = {};

  constructor(private productosService: ProductosService, private router: Router) {}

  guardarProducto(): void {
    this.productosService.crearProducto(this.producto).subscribe(() => {
      this.router.navigate(['/crudget']);
    });
  }
}
