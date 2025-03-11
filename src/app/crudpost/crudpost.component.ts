import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductosService } from '../service/crud.service';

@Component({
  selector: 'app-crudpost',
  standalone: false,
  templateUrl: './crudpost.component.html',
  styleUrl: './crudpost.component.css'
})
export class CrudpostComponent {
  producto: any = {};

  constructor(private productosService: ProductosService, private router: Router) {}

  guardarProducto(): void {
    console.log('Datos del producto:', this.producto); // Verificar los datos del producto
    this.productosService.crearProducto(this.producto).subscribe({
      next: () => {
        this.router.navigate(['/crudget']);
      },
      error: (error) => {
        console.error('Error creating product:', error);
      }
    });
  }
}
