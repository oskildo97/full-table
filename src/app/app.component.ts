
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

// Angular material
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
// Interfaces
import { Character } from './interfaces/character';
// Services
import { RickAndMortyService } from './services/rick-and-morty.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ CommonModule, RouterOutlet, MatTableModule, MatButtonModule, MatIconModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit
{
  displayedColumns: string[] = [ 'name' , 'status', 'action' ];
  dataSource: Character[] = [];

  constructor(
    private rickAndMortyServices: RickAndMortyService
  ){}

  ngOnInit(): void 
  {
    this.rickAndMortyServices.getAllCharacter().subscribe(
      response => {
        this.dataSource = response.results;
      },
      error => console.log( error )
    );
    
  }


}
