import { Injectable } from '@angular/core';

// Http
import { HttpClient } from '@angular/common/http';

// Interfaces
import { ResponseApi } from '../interfaces/response-api';




@Injectable({
  providedIn: 'root'
})

export class RickMortyService {

  constructor(
    private http: HttpClient
  ) { }

  getAllCharacters()
  {
    return this.http.get<ResponseApi>('https://rickandmortyapi.com/api/character');
  }

}
