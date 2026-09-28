import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PROJECTS } from '../content/projects';
import { JourneyTimeline } from './journey-timeline';
import { ProjectCard } from './project-card';

@Component({
  imports: [RouterLink, JourneyTimeline, ProjectCard],
  template: `
    <section class="hero container">
      <div class="hero-copy">
        <p class="eyebrow">DÉVELOPPEMENT · UI</p>
        <h1>Bienvenue sur le portfolio de <span>MORNEAU Théo.</span></h1>
        <p class="lead">Ingénieur informatique</p>
        <div class="actions">
          <a class="button button-primary" routerLink="/projets">Voir mes projets <span aria-hidden="true">↗</span></a>
          <a class="button button-outline" routerLink="/contact">Me contacter</a>
        </div>
      </div>
      <div class="portrait-placeholder" role="img" aria-label="Emplacement pour un portrait personnel">
        <span>PHOTO</span>
        <span class="portrait-corner" aria-hidden="true"></span>
      </div>
    </section>

    <section class="section container" id="parcours" aria-labelledby="parcours-title">
      <div class="section-heading">
        <div><p class="eyebrow">01 / MON HISTOIRE</p><h2 id="parcours-title">Mon parcours</h2></div>
        <p>Études, expériences et étapes importantes.</p>
      </div>
      <app-journey-timeline />
    </section>

    <section class="section container" aria-labelledby="projets-title">
      <div class="section-heading">
        <div><p class="eyebrow">02 / SÉLECTION</p><h2 id="projets-title">Projets</h2></div>
        <a class="text-link" routerLink="/projets">Tous les projets ↗</a>
      </div>
      <div class="project-grid">
        @for (project of projects; track project.slug) { <app-project-card [project]="project" /> }
      </div>
    </section>

    <section class="section container" aria-labelledby="tech-title">
      <div class="section-heading">
        <div><p class="eyebrow">03 / OUTILS</p><h2 id="tech-title">Technologies</h2></div>
        <p>À compléter.</p>
      </div>
      <div class="skill-list" aria-label="Exemples de technologies"><span>Angular</span><span>TypeScript</span><span>UI</span><span>Ajouter</span></div>
    </section>

  `,
})
export class HomePage {
  protected readonly projects = PROJECTS;
}
