import {Component} from '@angular/core';
import {Particle} from './particle';
import {ParticleService} from './particle.service';
import {OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'my-particles',
    styleUrls: ['app/particles.component.css'],
    templateUrl: 'app/particles.component.html',
})

export class ParticlesComponent implements OnInit {
    titulo = 'Modelo estándar';
    particles: Particle[] = [];
    selectedParticle: Particle;

    onSelect(particle: Particle) {
        this.selectedParticle = particle;
    }


    constructor(private router: Router,
                private particleService: ParticleService) {
    }

    ngOnInit() {
        this.getParticles();
    }

    getParticles() {
        this.particleService.getParticles().then(
            particles => this.particles = particles
        )
    }

    gotoParticle(particle: Particle) {
        let link = ['/detail', particle.id];
        this.router.navigate(link);
    }

    goBack() {
        window.history.back();
    }


}
