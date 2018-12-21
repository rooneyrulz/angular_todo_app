import { Component, OnInit } from '@angular/core';

import { DataService } from "../../services/data.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts: Posts[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getPosts().subscribe(post => {
      this.posts = post
    });
  }
}

interface Posts {
  id: number,
  title: string,
  body: string
}
