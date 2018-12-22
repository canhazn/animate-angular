import { Component, OnInit } from '@angular/core';
import { stagger, trigger, transition, group, query, style, animate, state } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [
        query(':enter', style({opacity: 0, transform: 'translateY(40px)'})),
        query(':enter', [
          stagger(100, [
            animate(300, style({opacity: 1, transform: 'translateY(0)'}))
          ])
        ]),
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {

  array = ["nguyen", "tuan", "anh", "ok", "anh", "day"];

  constructor() { }

  ngOnInit() {
  }

}