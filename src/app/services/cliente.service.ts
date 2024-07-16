import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  getCliente(ci: String){
    let url = "http://localhost:8080/pruebaJEE/rs/cliente/"+ci
    return this.http.get<any>(url)
  }

  getDeuda(){
    let url = "http://localhost:8080/pruebaJEE/rs/deuda"
    return this.http.get<any>(url)
  }
}
