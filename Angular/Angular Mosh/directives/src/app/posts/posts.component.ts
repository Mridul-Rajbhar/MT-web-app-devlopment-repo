import { PostService } from '../services/post.service';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

type myPost = {'userId': number, 'id': number, 'title': string, 'body':string}

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit{
  
  posts: myPost[] = [];
  deletedPost: number = 0;
  errorMessage: string = null;

  constructor(private _service: PostService){
    
    }

    ngOnInit(): void {
      
        this._service.getPosts().subscribe(
          (response: any)=>{
            this.posts = response;
          },
          (error)=>{
            this.errorMessage = error.message;
          } 
        )
    }

    postData(input: HTMLInputElement){
      let post:any = {'title': input.value};
      input.value = '';
      this._service.createPosts(post)
        .subscribe((response: any)=>{
          post['id'] = response['id'];
          this.posts.splice(0, 0, post);
      },
      (error: Response) => {
        if(error.status === 400)
        {
          alert("Bad request")
        }
        alert("An unexpected error occurred");
      }
      )
  
    }

    updatePost(input: HTMLInputElement, post: any){
        this._service.updatePost(post['id'], input.value)
          .subscribe((response: any)=>{
            this.posts[post['id']-1-this.deletedPost].title = input.value;
            console.log(response);
          },
          error => {
            alert("An unexpected error occurred");
          })
    }

    deletePost(post: any){
      this._service.deletePost(post['id'])
      .subscribe(
        (resposne)=>{
          let index: number = this.posts.indexOf(post);
          this.posts.splice(index, 1);
          ++this.deletedPost;
        },
        (error: Response) => {
          if(error.status === 404)
            alert("post is already deleted.");
          else
            alert("An unexpected error occurred");
        }
      )
    }
}
