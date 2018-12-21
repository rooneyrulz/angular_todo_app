import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  content: string;

  constructor() { }

  ngOnInit() {
    this.content = "Website Created by MA.Rooney 2k18";
  }

}
