import { Component, OnInit } from '@angular/core';
import { GithubService } from '../common/service/github.service';
import { AppException } from '../common/exceptions/app.exception';
import { NotFoundException } from '../common/exceptions/notfound.exception';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {

  users:  any;
  userPersonalInfo: any;
  constructor(private githubService: GithubService) { }

  ngOnInit(): void {
   this.getUserInfo(null);
   this.getFollowersList(null);
    
  }

  private getUserInfo(name:  string) {
    this.githubService.getUserInfo(name)
     .subscribe(response => {
       this.userPersonalInfo = response;
       console.log(response);
     });
  }

  private getFollowersList(name : string) {
    this.githubService.getFollowers(name)
    .subscribe(response => {
      this.users = response;
    },
    (error:  AppException) => {
      if (error instanceof NotFoundException) {
        alert('Unexpected  Not Found Exception occured');
      }
      throw null;
    });
  }

  searchFollowers(user: HTMLInputElement) {
    this.getFollowersList(user.value);
    this.getUserInfo(user.value)
  }



}
