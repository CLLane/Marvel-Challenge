import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_Key = 'cdaa672b867e4bb0441e68efcb19a8c1';
  constructor(private httpClient: HttpClient) { 
    
  }

  public getData() {
    return this.httpClient.get(`https://gateway.marvel.com/`)
  }
}
