import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID, signal } from '@angular/core';

export type Theme = 'light' | 'dark';
type TransitionPhase = 'idle' | 'closing' | 'opening';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly document = inject(DOCUMENT);
  private readonly browser = isPlatformBrowser(inject(PLATFORM_ID));

  readonly theme = signal<Theme>(
    this.browser && this.document.documentElement.dataset['theme'] === 'dark' ? 'dark' : 'light',
  );
  readonly phase = signal<TransitionPhase>('idle');

  toggle(): void {
    if (!this.browser || this.phase() !== 'idle') return;

    const next: Theme = this.theme() === 'light' ? 'dark' : 'light';
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) {
      this.apply(next);
      return;
    }

    this.phase.set('closing');
    window.setTimeout(() => {
      this.apply(next);
      this.phase.set('opening');
      window.setTimeout(() => this.phase.set('idle'), 260);
    }, 260);
  }

  private apply(theme: Theme): void {
    this.theme.set(theme);
    this.document.documentElement.dataset['theme'] = theme;
    localStorage.setItem('portfolio-theme', theme);
  }
}
