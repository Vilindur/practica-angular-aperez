import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductosService } from '../service/crud.service';

@Component({
  selector: 'app-crudput',
  standalone: false,
  templateUrl: './crudput.component.html',
  styleUrl: './crudput.component.css'
})
export class CrudputComponent implements OnInit {
  producto: any = {};

  constructor(
    private route: ActivatedRoute,
    private productosService: ProductosService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.productosService.obtenerPorId(Number(id)).subscribe(data => {
      this.producto = data;
    });
  }

  actualizarProducto(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.productosService.actualizarProducto(Number(id), this.producto).subscribe(() => {
      this.router.navigate(['/crudget']);
    });
  }
}
