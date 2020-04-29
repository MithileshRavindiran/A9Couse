import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class FavouriteComponent implements OnInit {

  @Input('is-favourite') isFavourite: boolean;

  @Output('change') changeCommit = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

  onStarClick()  {
    this.isFavourite = !this.isFavourite;
    this.changeCommit.emit({ newValue: this.isFavourite});
  }

}
