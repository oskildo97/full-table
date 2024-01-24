import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

// Angular material
import { MatTableModule } from '@angular/material/table';

// Interfaces
import { Characters } from './interfaces/characters';

// Http
import { HttpClientModule } from '@angular/common/http';

// Services
import { RickMortyService } from './services/rick-morty.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ CommonModule, RouterOutlet, MatTableModule, HttpClientModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit
{
  displayedColumns: string[] = [ 'name' ];
  dataSource: Characters[] = [];

  constructor(
    private rickMortyService: RickMortyService
  ) {}


    ngOnInit(): void 
    {
      this.rickMortyService.getAllCharacters().subscribe(
        response => {
          this.dataSource = response.results;
        },
        error => console.log( error )
      )
    }

}
