import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Project } from '../content/projects';

@Component({
  selector: 'app-project-card',
  imports: [RouterLink],
  template: `
    <article class="project-card">
      <a class="project-visual" [routerLink]="['/projets', project().slug]"
        [attr.aria-label]="'Voir le projet ' + project().title">
        <span>VISUEL À AJOUTER</span><strong>{{ project().number }}</strong>
      </a>
      <div class="project-card-meta"><span>{{ project().category }}</span><span>{{ project().number }}</span></div>
      <h3><a [routerLink]="['/projets', project().slug]">{{ project().title }} ↗</a></h3>
      <p>{{ project().summary }}</p>
    </article>
  `,
})
export class ProjectCard {
  readonly project = input.required<Project>();
}
