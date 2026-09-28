import { Component } from '@angular/core';
import { PROJECTS } from '../content/projects';
import { ProjectCard } from './project-card';

@Component({
  imports: [ProjectCard],
  template: `
    <section class="page-intro container">
      <p class="eyebrow">PORTFOLIO / PROJETS</p>
      <h1>Projets</h1>
      <p class="lead">Une sélection de réalisations à détailler.</p>
    </section>
    <section class="section container" aria-label="Liste des projets">
      <div class="project-grid">
        @for (project of projects; track project.slug) { <app-project-card [project]="project" /> }
      </div>
    </section>
  `,
})
export class ProjectsPage {
  protected readonly projects = PROJECTS;
}
