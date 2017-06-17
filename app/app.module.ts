import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent}   from './app.component';
import {FormsModule} from '@angular/forms';
import {ParticleDetailComponent} from './particle-detail.component';
import {ParticleService}     from './particle.service';
import {ParticlesComponent}     from './particles.component';
import {RoutesModule} from './app.routes';
import {FamiliesComponent} from './families.component';

@NgModule({
    imports: [BrowserModule, FormsModule, RoutesModule],
    declarations: [AppComponent, ParticleDetailComponent, ParticlesComponent, FamiliesComponent],
    bootstrap: [AppComponent],
    providers: [ParticleService],
})
export class AppModule {
}