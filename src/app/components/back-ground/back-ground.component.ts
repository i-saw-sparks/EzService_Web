import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-back-ground',
  templateUrl: './back-ground.component.html',
  styleUrls: ['./back-ground.component.css']
})
export class BackGroundComponent {
 @Input() bgStyle:string;

  constructor() { 
    
  }


}
