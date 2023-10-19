import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class JsonService {

  constructor(private http: HttpClient) { }

  getJSONData(): Observable<any> {
    return this.http.get('assets/donnees/campagne.json');
  }

  getProduits(): Observable<any> {
    return this.http.get('assets/donnees/produit.json');
  }

}