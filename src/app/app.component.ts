import { Component } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('listStagger', [
        transition('*<=>*', [
            query(
                ':enter',
                [
                    style({ opacity: 0, transform: 'translateY(-15px)' }),
                    stagger(
                        '50ms',
                        animate(
                            '550ms ease-out',
                            style({ opacity: 1, transform: 'translateY(0px)' })
                        )
                    )
                ],
                { optional: true }
            ),
            query(
                ':leave', animate('50ms', style({ opacity: 0})), {
                    optional: true
              })
        ])
    ])
]
})
export class AppComponent {
  title = 'ng6-proj';
}
