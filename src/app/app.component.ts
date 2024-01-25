import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

// Angular material
import { MatTableModule } from '@angular/material/table';
// Interfaces
import { Characters } from './interfaces/character';
// Services
import { RickAndMortyService } from './services/rick-and-morty.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatTableModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit
{
  displayedColumns: string[] = [ 'name', 'status' ];
  dataSource: Characters[] =[];

  constructor(
    private rickAndMortyServices: RickAndMortyService
  ) {}


  ngOnInit(): void 
  {
    this.rickAndMortyServices.getAllCharacters().subscribe(
      response => {
        this.dataSource = response.results;
      },
      error => console.log( error )
    );
    
  }

}
