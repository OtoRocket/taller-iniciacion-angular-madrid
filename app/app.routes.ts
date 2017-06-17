import {RouterModule}   from '@angular/router';
import {ParticlesComponent} from './particles.component';
import {FamiliesComponent} from './families.component';
import {ParticleDetailComponent} from './particle-detail.component';

export var RoutesModule = RouterModule.forRoot([
    {
        path: '',
        redirectTo: '/particles',
        pathMatch: 'full'
    },
    {
        path: 'particles',
        component: ParticlesComponent
    },
    {
        path: 'families',
        component: FamiliesComponent
    },

    {
        path: 'detail/:id',
        component: ParticleDetailComponent
    }
]);