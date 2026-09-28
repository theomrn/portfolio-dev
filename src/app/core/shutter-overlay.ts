import { Component, inject } from '@angular/core';
import { ThemeService } from './theme.service';

@Component({
  selector: 'app-shutter-overlay',
  template: `<div class="shutter-overlay" aria-hidden="true"
    [class.is-closing]="theme.phase() === 'closing'"
    [class.is-opening]="theme.phase() === 'opening'"></div>`,
})
export class ShutterOverlay {
  protected readonly theme = inject(ThemeService);
}
