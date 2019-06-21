import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {



  index = 0;
  speed = 2000;
  infinite = true;
  direction = 'right';
  directionToggle = true;
  autoplay = true;
  // avatars = '12345'.split('').map((x, i) => {
  //   const num = i;
  //   // const num = Math.floor(Math.random() * 1000);
  //   return {
  //     url: `https://picsum.photos/600/400/?${num}`,
  //     title: `${num}`
  //   };
  // });
  avatars = [
    { title: 'test 2', url: '/assets/images/slider/01.jpg' },
    { title: 'test 2', url: '/assets/images/slider/02.jpg' },
    { title: 'test 2', url: '/assets/images/slider/03.jpg' },
    { title: 'test 2', url: '/assets/images/slider/04.jpg' },
    { title: 'test 2', url: '/assets/images/slider/05.jpg' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
