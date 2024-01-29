import { Routes } from '@angular/router';
// ComponenteCharacter
import { ListAllCharactersComponent } from './pages/list-all-characters/list-all-characters.component';

export const routes: Routes = [
    {
        path: 'characters',
        component: ListAllCharactersComponent
    }
];
