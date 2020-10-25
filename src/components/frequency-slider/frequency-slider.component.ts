import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'frequency-slider',
  templateUrl: './frequency-slider.component.html',
  styleUrls: ['./frequency-slider.component.scss']
})
export class FrequencySliderComponent implements OnInit {

  value: number;

  constructor() { }

  ngOnInit() {
  }

  slide(event: any) {
    console.log(event.value)
  }

}
