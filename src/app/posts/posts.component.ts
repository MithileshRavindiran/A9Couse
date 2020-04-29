import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { PostsService } from './posts.service';
import { AppException } from '../common/exceptions/app.exception';
import { NotFoundException } from '../common/exceptions/notfound.exception';
import { BadRequestException } from '../common/exceptions/badRequest.exception';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any;
  
  constructor(private postsService: PostsService) { 
    
  }

  ngOnInit(): void {
    this.postsService.getPosts()
    .subscribe(response=> {
      this.posts = response;
      console.log(this.posts);
    })
  }

  createPost(myPost: HTMLInputElement) {
    console.log(myPost.value);
    let post  =  {
      title: myPost.value
    }
    myPost.value = '';
    this.postsService.createPost(JSON.stringify(post))
    .subscribe(response => {
      post['id'] = response['id'];
      this.posts.splice(0,0,post);
      console.log(response['id']);
    })
  }

  updatePost(postToUpdate:  any) {
    console.log(postToUpdate);
    postToUpdate['title']='updatedTitle';
    this.postsService.updatePost(postToUpdate)
    .subscribe(response => {
      console.log(response);
    },(error:  AppException) => {
      if (error instanceof BadRequestException) {
        alert('Bad  Request  Exception occured');
      }else  
      throw  error;
    })
  }

  deletePost(postToDelete: any) {
    console.log(postToDelete);
    this.postsService.deletePost(postToDelete['id'])
    .subscribe(
      response =>  {
      let index = this.posts.indexOf(postToDelete);
      this.posts.splice(index ,1);
      console.log(response);
    },(error : AppException)=> {
      if (error instanceof NotFoundException) {
        alert("This post has been already deleted");
      }else 
        throw error;
    })
  }

  


}
