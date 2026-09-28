import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', title: 'Accueil · Portfolio', loadComponent: () => import('./features/home.page').then(m => m.HomePage) },
  { path: 'projets', title: 'Projets · Portfolio', loadComponent: () => import('./features/projects.page').then(m => m.ProjectsPage) },
  { path: 'projets/:slug', loadComponent: () => import('./features/project-detail.page').then(m => m.ProjectDetailPage) },
  { path: 'contact', title: 'Contact · Portfolio', loadComponent: () => import('./features/contact.page').then(m => m.ContactPage) },
  { path: '**', title: 'Page introuvable · Portfolio', loadComponent: () => import('./features/not-found.page').then(m => m.NotFoundPage) },
];
