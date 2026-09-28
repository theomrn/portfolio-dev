import { Component } from '@angular/core';
import { JOURNEY } from '../content/journey';

@Component({
  selector: 'app-journey-timeline',
  template: `
    <ol class="timeline" aria-label="Parcours scolaire et professionnel">
      @for (event of events; track $index) {
        <li class="timeline-event">
          <div class="timeline-marker" aria-hidden="true"></div>
          <div class="timeline-card">
            <p class="eyebrow">{{ event.period }} · {{ event.kind }}</p>
            <h3>{{ event.title }}</h3>
            <p>{{ event.place }}</p>
          </div>
        </li>
      }
    </ol>
  `,
})
export class JourneyTimeline {
  protected readonly events = JOURNEY;
}
