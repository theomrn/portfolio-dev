import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ThemeService } from './theme.service';

@Component({
  selector: 'app-site-header',
  imports: [RouterLink],
  template: `
    <header class="site-header container">
      <a class="brand" routerLink="/" aria-label="Accueil du portfolio">PN<span>.</span></a>
      <button class="theme-toggle" type="button" (click)="theme.toggle()"
        [attr.aria-label]="theme.theme() === 'light' ? 'Activer le mode sombre' : 'Activer le mode clair'">
        <span aria-hidden="true">◐</span>
      </button>
    </header>
  `,
})
export class SiteHeader {
  protected readonly theme = inject(ThemeService);
}
