import {Component} from '@angular/core';
import {OnInit} from '@angular/core';
import {ParticleService} from './particle.service';

@Component({
    selector: 'my-families',
    template: `
  <h3>Families</h3>
  <ul>
    <li *ngFor="let family of families">{{family}}</li>
  </ul>
`,
    providers: [ParticleService]
})
export class FamiliesComponent implements OnInit {
    families: String[];

    constructor(private particleService: ParticleService) {
    }

    ngOnInit() {
        this.getFamilies();
    }

    getFamilies() {
        this.particleService.getParticles().then(
            particles =>
                this.families = particles.reduce((acc, {type}) => acc.includes(type) ? acc : [type, ...acc], [])
        )
    }
}