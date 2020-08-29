import { Post } from './post.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({providedIn:'root'})     //decorator for identify the service class
export class PostService{
  listChanged = new Subject<Post[]>();
    listOfPosts:Post[]=[
      //   new Post('World Cup Day ',`Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
      //   Aperiam similique neque ab ut nobis aut possimus repellat 
      //   vitae sunt.At debitis eaque commodi corrupti praesentium 
      //   exercitationem excepturi natus nisi sunt.`,'https://s3.india.com/wp-content/uploads/2020/04/sacin.jpg','test@test.com',new Date()),
        
      //   new Post('Sushant Sing Rajput',`Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
      // Aperiam similique neque ab ut nobis aut possimus repellat 
      // vitae sunt.At debitis eaque commodi corrupti praesentium 
      // exercitationem excepturi natus nisi sunt.`,'https://img.etimg.com/thumb/msid-76368882,width-643,height-362,imgsize-175512/.jpg','test@test.com',new Date()),
      
      // new Post('Banned Tik-Tok',`Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
      // Aperiam similique neque ab ut nobis aut possimus repellat 
      // vitae sunt.At debitis eaque commodi corrupti praesentium 
      // exercitationem excepturi natus nisi sunt.`,'https://thescrbblr.in/wp-content/uploads/2020/05/tik-tok-ban-4-min-scaled.jpg','test@test.com',new Date()),
        
      ];

      getPosts(){
          return this.listOfPosts;
      }

      deletePost(index:number){
          this.listOfPosts.splice(index,1);
      }
      addPost(post:Post){
        this.listOfPosts.push(post);
      }
      updatePost(index:number, post:Post){
        this.listOfPosts[index]=post;
      }
      getPost(index:number){
        return this.listOfPosts[index];
      }
      setPosts(posts:Post[]){
        this.listOfPosts=posts.reverse();
        this.listChanged.next(this.listOfPosts);

      }

}