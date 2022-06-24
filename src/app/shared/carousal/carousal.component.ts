import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import {
  trigger,
  style,
  animate,
  transition
} from '@angular/animations';
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


  isExpanded = false;
  public animateItems = true;
  ngOnInit(): void {
  }

  moveCarousalLeft() {
    if(this.carousalData && this.carousalData.length >= 4) {
      this.moveItems()
    }
  }

  findItemTobeMoved(deiviceWidth:Number): Number {
    let items = 2
    if(deiviceWidth <= 844) {
      items = 2;
   } if(deiviceWidth <= 667) {
    items= 1;
   }
   return items;
  }
  moveItems () {
    const numberOfItemTobemoved = this.findItemTobeMoved(document.documentElement.clientWidth);
    this.animateItems = false;
    const firstThreeItem  = this.carousalData.splice(0,numberOfItemTobemoved);
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
  }

  // delay function 
}
