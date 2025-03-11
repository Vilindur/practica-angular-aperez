import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../service/crud.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-crudget',
  standalone: false,
  templateUrl: './crudget.component.html',
  styleUrl: './crudget.component.css'
})
export class CrudgetComponent implements OnInit {
  productos: any[] = [];

  constructor(private productosService: ProductosService, private router: Router) {}

  ngOnInit(): void {
    this.obtenerTodos();
  }

  obtenerTodos(): void {
    this.productosService.obtenerTodos().subscribe(response => {
      if (response && Array.isArray(response.articulos)) {
        this.productos = response.articulos;
      } else {
        console.error('Expected an array but got:', response);
      }
    });
  }

  agregarRegistro(): void {
    this.router.navigate(['/crudpost']);
  }

  editarRegistro(id: number): void {
    this.router.navigate(['/crudput', id]);
  }

  eliminarRegistro(id: number): void {
    this.productosService.eliminarProducto(id).subscribe(() => {
      this.obtenerTodos();
    });
  }

}
