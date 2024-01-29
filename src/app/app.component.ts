import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
// Componentes
import { ListAllCharactersComponent } from './pages/list-all-characters/list-all-characters.component';
// Angular Material
import { MatButtonModule } from '@angular/material/button';
import { MainMenuComponent } from './components/main-menu/main-menu.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports:[ CommonModule,
            RouterOutlet,
            ListAllCharactersComponent,
            MainMenuComponent,
            MatButtonModule,
            RouterModule
          ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'full-table';
}
