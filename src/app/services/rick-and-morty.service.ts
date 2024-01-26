
import { Injectable } from '@angular/core';

// Solicitu HTTP
import { HttpClient } from '@angular/common/http';
// Interfaces
import { ResponseApi } from '../interfaces/response-api';

@Injectable({
  providedIn: 'root'
})

export class RickAndMortyService 
{

  constructor(
    private http: HttpClient
  ) { }


  getAllCharacter()
  {
    return this.http.get<ResponseApi>('https://rickandmortyapi.com/api/character');
  }

}
