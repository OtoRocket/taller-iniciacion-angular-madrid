import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        <a [routerLink]="['particles']">Particles</a>
        <a [routerLink]="['families']">Families</a>
        <router-outlet></router-outlet>
    `,
})
export class AppComponent {
    title = 'Modelo estándar';
}