import {Injectable} from '@angular/core';

import {PARTICLES} from './mock-particles';
import {Particle} from './particle';

@Injectable()
export class ParticleService {
    getParticles(): Promise<Particle[]> {
        return Promise.resolve(PARTICLES);
    }

    getParticlesSlowly(): Promise<Particle[]> {
        return new Promise<Particle[]>(resolve =>
            setTimeout(()=>resolve(PARTICLES), 2000)
        );
    }

    getParticle(id: string): Promise<Particle> {
        return this.getParticles().then(
            (particles: Particle[]) => particles.find(
                particle => particle.id === id
            )
        )
    }
}