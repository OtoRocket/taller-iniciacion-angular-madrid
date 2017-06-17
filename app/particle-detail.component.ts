import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params}   from '@angular/router';
import {Location}                 from '@angular/common';

import {ParticleService} from './particle.service';
import {Particle} from './particle';

@Component({
    selector: 'my-particle-detail',
    template: ` 
  <h1>Detalle Particula</h1>
  <div *ngIf="particle">
       <h2>Detalles del {{particle.type}} {{particle.name}}.</h2>
       <p>Masa: {{particle.mass}}</p>
       <p>Carga: {{particle.charge}}</p>
       <p>Spin: {{particle.spin}}</p>
       <p>Type: {{particle.type}}</p>
       <p>Fuerzas: {{particle.forces.join(', ')}}</p>
       <div>
         <label>Ajusta la masa: </label>
         <input [(ngModel)]="particle.mass" placeholder="masa">
       </div>
   </div>
  `
})

export class ParticleDetailComponent implements OnInit {

    @Input()
    particle: Particle;

    constructor(private particleService: ParticleService,
                private route: ActivatedRoute,
                private location: Location) {
    }

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id = params['id'];
            this.particleService.getParticle(id)
                .then(particle => this.particle = particle);
        });
    }
}