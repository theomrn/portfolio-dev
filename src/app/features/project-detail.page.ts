import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { PROJECTS } from '../content/projects';

@Component({
  imports: [RouterLink],
  template: `
    @if (project(); as project) {
      <article class="container project-detail">
        <a class="back-link" routerLink="/projets">← Tous les projets</a>
        <header class="page-intro">
          <p class="eyebrow">PROJET {{ project.number }} / {{ project.category }}</p>
          <h1>{{ project.title }}</h1>
          <p class="lead">{{ project.summary }}</p>
        </header>
        <div class="detail-visual" role="img" aria-label="Emplacement pour une capture du projet">CAPTURE DU PROJET À AJOUTER</div>
        <div class="detail-grid">
          <aside aria-label="Informations sur le projet">
            <p class="eyebrow">MON RÔLE</p><p>À préciser</p>
            <p class="eyebrow">TECHNOLOGIES</p><p>{{ project.technologies.join(' · ') }}</p>
          </aside>
          <div class="detail-body">
            <section><h2>Le contexte</h2><p>Décris ici le problème et les objectifs du projet.</p></section>
            <section><h2>Ma contribution</h2><p>Explique ce que tu as conçu et développé personnellement.</p></section>
            <section><h2>Le résultat</h2><p>Ajoute le résultat, les captures et les liens utiles.</p></section>
          </div>
        </div>
      </article>
    } @else {
      <section class="page-intro container"><h1>Projet introuvable</h1><a routerLink="/projets">Voir les projets ↗</a></section>
    }
  `,
})
export class ProjectDetailPage {
  private readonly route = inject(ActivatedRoute);
  private readonly title = inject(Title);
  private readonly slug = toSignal(this.route.paramMap.pipe(map(params => params.get('slug'))), {
    initialValue: this.route.snapshot.paramMap.get('slug'),
  });
  protected readonly project = computed(() => {
    const found = PROJECTS.find(item => item.slug === this.slug());
    this.title.setTitle(found ? `${found.title} · Portfolio` : 'Projet introuvable · Portfolio');
    return found;
  });
}
