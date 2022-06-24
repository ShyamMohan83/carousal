import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarousalComponent } from './carousal/carousal.component';
import { CarousalCardComponent } from './carousal-card/carousal-card.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    CarousalComponent,
    CarousalCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[CarousalComponent]
})
export class SharedModule { }
