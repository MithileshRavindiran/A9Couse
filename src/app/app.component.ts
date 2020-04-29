import { Component } from '@angular/core';

interface FavouriteChangedEventArgs {
  newValue :  boolean
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'helloworld';

  post = {
    title: 'Name',
    isFavourite: true
  }

  // onFavouriteChange(isFavourite)  {
  //   console.log("Favourite Changed: ", isFavourite);
  // }

  onFavouriteChange(eventArgs: FavouriteChangedEventArgs) {
    console.log("Favourite Changed:", eventArgs);
  }
}
