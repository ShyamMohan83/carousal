import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-carousal-card',
  templateUrl: './carousal-card.component.html',
  styleUrls: ['./carousal-card.component.css']
})
export class CarousalCardComponent implements OnInit {

  @Input() cardItem:any;
  @Input() carousalAttributes:any;
  public cardKey: string []  = []
  constructor() { }

  ngOnInit(): void {
    this.cardKey = this.getAttributes();
  }
  getAttributes() {
    return Object.keys(this.cardItem);
  }
}
