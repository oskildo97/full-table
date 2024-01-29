import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseRickMorty } from '../interfaces/response-rick-morty';

@Injectable({
  providedIn: 'root'
})
export class RickMortyService {

  constructor(
    private http: HttpClient
  ) { }

  getAllCharacters()
  {
    return this.http.get<ResponseRickMorty>('https://rickandmortyapi.com/api/character');
  }

}
