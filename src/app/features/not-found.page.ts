import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  template: `
    <section class="page-intro container not-found">
      <p class="eyebrow">404 / PAGE INTROUVABLE</p>
      <h1>Cette page n'existe pas.</h1>
      <a class="button button-primary" routerLink="/">Retour à l'accueil ↗</a>
    </section>
  `,
})
export class NotFoundPage {}
