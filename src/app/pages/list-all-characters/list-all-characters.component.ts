
import { Component, OnInit } from '@angular/core';

// Angular Material
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
// Interfaces
import { Character } from '../../interfaces/character';
// Services
import { RickMortyService } from '../../services/rick-morty.service';

@Component({
  selector: 'app-list-all-characters',
  standalone: true,
  imports: [ MatTableModule, MatButtonModule, MatIconModule ],
  templateUrl: './list-all-characters.component.html',
  styleUrl: './list-all-characters.component.css'
})

export class ListAllCharactersComponent implements OnInit
{
  displayedColumns: string[] = [ 'name', 'status', 'actions' ];
  dataSource: Character[] = [];

  constructor(
    private rickMortyService: RickMortyService
  ) {}

  ngOnInit(): void 
  {
    this.rickMortyService.getAllCharacters().subscribe(
      response => {
        this.dataSource = response.results;
      },
      error => {
        console.log(error);
      }
    );
    
  }

}
