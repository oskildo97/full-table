
import { Injectable } from '@angular/core';

// Solicitudes HTTP
import { HttpClient } from '@angular/common/http';

// interfaces
import { ResponseApi } from '../interfaces/response-api';



@Injectable({
  providedIn: 'root'
})

export class RickAndMortyService 
{

  constructor(
    private http: HttpClient
  ) { }

  getAllCharacters()
  {
    return this.http.get<ResponseApi>('https://rickandmortyapi.com/api/character');
  }
}
