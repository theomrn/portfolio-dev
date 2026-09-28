import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SiteHeader } from './core/site-header';
import { SiteFooter } from './core/site-footer';
import { ShutterOverlay } from './core/shutter-overlay';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SiteHeader, SiteFooter, ShutterOverlay],
  templateUrl: './app.html',
})
export class App {}
