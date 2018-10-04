import { Component, OnInit } from '@angular/core';
import { DataService } from './../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

    user$: Object;

  constructor(private _route: ActivatedRoute, private _data: DataService) {
      this._route.params.subscribe( params => this.user$ = params.id );
  }

  ngOnInit() {
      this._data.getUser(this.user$).subscribe(
          _data => this.user$ = _data
      );
  }

}
