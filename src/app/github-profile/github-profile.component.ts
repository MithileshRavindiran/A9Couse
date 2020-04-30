import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  constructor(private route:ActivatedRoute, private router:Router) { }

  ngOnInit() {
    console.log('Inside GithubProfile Component');
    this.route.paramMap.subscribe(
      response => {
        console.log(response.get('username'));
      }
    );

    this.route.queryParamMap.subscribe(
      response => {
        console.log(response.get('page'));
      }
    );
    combineLatest(this.route.paramMap, this.route.queryParamMap)
    .subscribe(response => {
      console.log(response[0].get('username'));
      console.log(response[1].get('page'));
    })
    //this.route.snapshot.paramMap.get('username');
  }

  submit() {
    this.router.navigate(['/followers'],{queryParams: {page:1,order:'newest'}});
  }

}
