import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_Key = 'cdaa672b867e4bb0441e68efcb19a8c1';
  ts = 'thesoer';
  hash = '4a161dc76ced1c6bebdebdbf3041c028'
  constructor(private httpClient: HttpClient) { 
    
  }

  public getCharacters() {
    return this.httpClient.get(`https://gateway.marvel.com/v1/public/characters?ts=${this.ts}&apikey=${this.API_Key}&hash=${this.hash}
`)
  }
}
