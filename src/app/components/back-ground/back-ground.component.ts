import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-back-ground',
  templateUrl: './back-ground.component.html',
  styleUrls: ['./back-ground.component.css']
})
export class BackGroundComponent implements OnInit {

  backClass:string;

  constructor() { 
    this.backClass = 'loginBackground';
  }

  ngOnInit(): void {
  }

}
