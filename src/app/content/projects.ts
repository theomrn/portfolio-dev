export type Project = {
  slug: string;
  number: string;
  title: string;
  category: string;
  summary: string;
  technologies: string[];
};

// Remplace ces entrées par tes vrais projets. Le slug devient l'URL de la page.
export const PROJECTS: Project[] = [
  {
    slug: 'projet-01', number: '01', title: 'Projet 01',
    category: 'Application web',
    summary: 'Une phrase pour présenter le projet et son objectif.',
    technologies: ['Angular', 'TypeScript'],
  },
  {
    slug: 'projet-02', number: '02', title: 'Projet 02',
    category: 'Interface & développement',
    summary: 'Une phrase pour présenter le projet et ton rôle.',
    technologies: ['UI', 'Frontend'],
  },
];
