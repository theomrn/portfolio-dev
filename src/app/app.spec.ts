import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { App } from './app';
import { routes } from './app.routes';

describe('Portfolio shell', () => {
  it('keeps the main navigation and theme control accessible', async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter(routes)],
    }).compileComponents();
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const root = fixture.nativeElement as HTMLElement;
    expect(root.querySelector('main#main')).toBeTruthy();
    expect(root.querySelector('nav[aria-label="Navigation principale"]')).toBeTruthy();
    expect(root.querySelector('button[aria-label^="Activer le mode"]')).toBeTruthy();
  });
});
