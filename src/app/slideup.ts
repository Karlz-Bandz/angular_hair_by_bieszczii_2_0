import { trigger, state, style, transition,
    animate
} from '@angular/animations';

export const Slide = [
    trigger('popSlideState', [
        state('show', style({
          opacity: 1,
          transform: 'translateY(0)'
          
        })),
        state('hide', style({
          opacity: 0,
          transform: 'translateX(-100%)'
        })),
        transition('show => hide', animate('600ms ease-out')),
        transition('hide => show', animate('1000ms ease-in'))
      ])
]