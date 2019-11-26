import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const pagesRoutes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        // canActivate: [VerificaTokenGuard],
        data: { titulo: 'Home' }
    },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];

// se usa el forchild cuando es una router dentro de otro router
export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );