import { Component, Input, OnInit } from '@angular/core';
import {
  trigger,
  style,
  animate,
  transition
} from '@angular/animations';
import { Time } from '@angular/common';
@Component({
  selector: 'app-carousal',
  templateUrl: './carousal.component.html',
  styleUrls: ['./carousal.component.css'],
  animations: [
    trigger('flyout', [
      transition('void => *', [
        style({transform: 'translateX(100%)'}),
        animate('0.5s')
      ]),
      transition('* => void', [
        animate('0.5s', style({transform: 'translateX(-100%)'}))
      ]),
    ]),
  ]
})
export class CarousalComponent implements OnInit {

  constructor() { }

  @Input() carousalData: any;
  @Input() carousalAttributes:any;

  delayAnimation = 10; // 10 milliseconds
  itemTobeMoved = 2; // No item to be animated 2 = 3 items index 0 to 2
  isExpanded = false;
  public animateItems = true;
  ngOnInit(): void {
  }

  moveCarousalLeft() {
    if(this.carousalData && this.carousalData.length >= 4) {
      this.moveItems()
    }
  }
  async moveItems () {
    this.animateItems = false;
    const firstThreeItem  = this.carousalData.splice(0,this.itemTobeMoved);
    const temp = [...this.carousalData]
    this.carousalData = [];
    /**
     * delay the animation for 10 sec 
     */
  setTimeout(()=> {
      this.carousalData = [...temp, ...firstThreeItem];
      this.animateItems = true;
    },this.delayAnimation); 
  
  }

  expandAll() {
    this.isExpanded = !this.isExpanded;
    console.log(this.isExpanded);
  }

  // delay function 
}
