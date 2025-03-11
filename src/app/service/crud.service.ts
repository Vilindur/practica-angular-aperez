import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const URL_BASE = 'https://apiproyecto016.iesruizgijon.es/api/articulos';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private httpclient: HttpClient) { }

  obtenerTodos(): Observable<{ articulos: any[] }> {
    return this.httpclient.get<{ articulos: any[] }>(`${URL_BASE}`);
  }

  obtenerPorId(id: number): Observable<any> {
    return this.httpclient.get<any>(`${URL_BASE}/${id}`);
  }

  crearProducto(producto: any): Observable<any> {
    const payload = { articulos: [producto] }; // Ajusta el formato de los datos
    return this.httpclient.post<any>(`${URL_BASE}`, payload);
  }

  actualizarProducto(id: number, producto: any): Observable<any> {
    const payload = { articulos: [producto] }; // Ajusta el formato de los datos
    return this.httpclient.put<any>(`${URL_BASE}/${id}`, payload);
  }

  eliminarProducto(id: number): Observable<any> {
    return this.httpclient.delete<any>(`${URL_BASE}/${id}`);
  }
  
  
}
