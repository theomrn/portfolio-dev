export type JourneyEvent = {
  period: string;
  kind: 'Formation' | 'Expérience';
  title: string;
  place: string;
};

// Des jalons temporaires pour dessiner la frise.
export const JOURNEY: JourneyEvent[] = [
  { period: '20XX', kind: 'Formation', title: 'Étape de formation', place: 'Établissement à renseigner' },
  { period: '20XX', kind: 'Expérience', title: 'Première expérience', place: 'Organisation à renseigner' },
  { period: 'Aujourd’hui', kind: 'Expérience', title: 'Ce que je fais maintenant', place: 'À personnaliser' },
];
