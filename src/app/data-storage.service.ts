import { Injectable } from '@angular/core';
import { PostService } from './post.service';
import {HttpClient} from '@angular/common/http'
import { from } from 'rxjs';
import { Post } from './post.model';
import { tap } from 'rxjs/operators';

@Injectable({providedIn:'root'})
export class DataStorageService{

    constructor(private postService:PostService,private http:HttpClient){}

    //get data from postservice and store to database
    storePosts(){
        const posts:Post[]=this.postService.getPosts();
        this.http.put('https://live-posts-18c27.firebaseio.com/posts.json',posts).subscribe((res)=> console.log(res));
    }

    fetchPosts(){
        this.http.get('https://live-posts-18c27.firebaseio.com/posts.json').pipe(
            tap((posts:Post[])=>{
                console.log(posts);
                this.postService.setPosts(posts);
            })
        ).subscribe();
        
    }
}