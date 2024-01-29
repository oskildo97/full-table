import { Component, OnInit } from '@angular/core';
// Angular Material
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
// Interfaces
import { Character } from '../../interfaces/character';
// Servives
import { ListRickMortyService } from '../../services/list-rick-morty.service';


@Component({
  selector: 'app-list-all-characters',
  standalone: true,
  imports: [ MatTableModule, MatIconModule, MatButtonModule ],
  templateUrl: './list-all-characters.component.html',
  styleUrl: './list-all-characters.component.css'
})

export class ListAllCharactersComponent implements OnInit
{
  displayedColumns: string[] = [ 'name', 'status', 'actions' ];
  dataSource: Character[] = [];


  constructor(
    private rickMortyService: ListRickMortyService
  ) 
  {}


  ngOnInit(): void 
  {
    this.rickMortyService.getAllCharacters().subscribe(
      response => {
        this.dataSource = response.results
      },
      error => {
        console.log(error);
      }
    )
    
  }

}
