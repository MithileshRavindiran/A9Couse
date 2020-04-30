import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseComponent } from './course/course.component';
import { FollowersComponent } from './followers/followers.component';
import { PostsComponent } from './posts/posts.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path:'', 
  redirectTo:'home',
  pathMatch:'full'
},
{
  path:'home', 
  component:HomeComponent
},
{
  path: 'followers', 
  component:FollowersComponent
},
{
  path: 'followers/:id/:username', 
  component:GithubProfileComponent
},
{
  path: 'posts', 
  component:PostsComponent
},
{
  path:'**',
  component:NotFoundComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
