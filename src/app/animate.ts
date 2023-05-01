import { trigger, state, style, transition,
    animate
} from '@angular/animations';

export const Animate = [
    trigger('popState', [
        state('show', style({
          opacity: 1
        })),
        state('hide', style({
          opacity: 0
        })),
        transition('show => hide', animate('600ms ease-out')),
        transition('hide => show', animate('1000ms ease-in'))
      ])
]