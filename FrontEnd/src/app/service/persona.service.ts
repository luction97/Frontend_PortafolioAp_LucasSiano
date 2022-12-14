import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';


@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  // URL genérica por defecto
  URL = 'https://backendportafolioaplucassiano-production.up.railway.app/personas/';


  constructor(private http: HttpClient) { }


  //Utiliza el 'Observable' para hacer peticiones asincronas
  public getPersona():Observable<persona> {


    return this.http.get<persona>(this.URL+'traer/perfil');
  }

} 
