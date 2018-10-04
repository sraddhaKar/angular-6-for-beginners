import { Component, OnInit } from '@angular/core';
import { DataService } from './../data.service';
import { Observable } from 'rxjs';
import { trigger, transition, query, style, stagger, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],

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
export class PostsComponent implements OnInit {

    posts$: Object;

  constructor(private _data: DataService) { }

  ngOnInit() {
      this._data.getPosts().subscribe(
          _data => this.posts$ = _data
      );
  }

}
