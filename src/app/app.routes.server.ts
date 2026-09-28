import { RenderMode, ServerRoute } from '@angular/ssr';
import { PROJECTS } from './content/projects';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'projets/:slug',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      return PROJECTS.map(({ slug }) => ({ slug }));
    },
  },
  { path: '**', renderMode: RenderMode.Prerender },
];
