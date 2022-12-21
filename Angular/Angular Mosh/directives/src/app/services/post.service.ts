import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private _url: string = "https://jsonplaceholder.typicode.com/posts";

  constructor(private _http: HttpClient) { }

  getPosts(){
    return this._http.get(this._url)
  }

  createPosts(post: any){
    return this._http.post(this._url, JSON.stringify(post))
  }

  updatePost(postId: number, value: string){
    return this._http.patch( this._url+"/"+postId , JSON.stringify({'title': value}))
  }

  deletePost(postId: number){
    return this._http.delete(this._url + "/" + postId)
  }
}

