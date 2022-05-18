
// slides.component.ts

import { Component, ElementRef, OnInit, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import SwiperCore, { Keyboard, Pagination, Navigation, Virtual,Thumbs, Swiper } from 'swiper';
import { SwiperComponent } from "swiper/angular";

SwiperCore.use([Keyboard, Pagination, Navigation, Virtual,Thumbs]);


@Component({
  selector: 'corp-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SlidesComponent implements OnInit {

  @ViewChild('myswiper3', { static: false }) swiper3?: SwiperComponent;
  //@ViewChild('someInput') someInput!: HTMLElement;
  @ViewChild('div1', { static: false }) div1?: ElementRef;
  @ViewChild('div22', { static: false }) div2?: ElementRef;
  @ViewChild('img1', { static: false }) img1?: ElementRef;
  @ViewChild('myglass1', { static: false }) myglass1?: ElementRef;
  @ViewChild('img2', { static: false }) img2?: ElementRef;
  @ViewChild('myglass2', { static: false }) myglass2?: ElementRef;
  @ViewChild('img3', { static: false }) img3?: ElementRef;
  @ViewChild('myglass3', { static: false }) myglass3?: ElementRef;
  @ViewChild('img4', { static: false }) img4?: ElementRef;
  @ViewChild('myglass4', { static: false }) myglass4?: ElementRef;
  @ViewChild('img5', { static: false }) img5?: ElementRef;
  @ViewChild('myglass5', { static: false }) myglass5?: ElementRef;
  @ViewChild('img6', { static: false }) img6?: ElementRef;
  @ViewChild('myglass6', { static: false }) myglass6?: ElementRef;
  @ViewChild('img7', { static: false }) img7?: ElementRef;
  @ViewChild('myglass7', { static: false }) myglass7?: ElementRef;
  @ViewChild('img8', { static: false }) img8?: ElementRef;
  @ViewChild('myglass8', { static: false }) myglass8?: ElementRef;
  urls = ["https://swiperjs.com/demos/images/nature-1.jpg",
          "https://swiperjs.com/demos/images/nature-2.jpg",
          "https://swiperjs.com/demos/images/nature-3.jpg",
          "https://swiperjs.com/demos/images/nature-4.jpg",
          "https://swiperjs.com/demos/images/nature-5.jpg",
          "https://swiperjs.com/demos/images/nature-6.jpg",
          "https://swiperjs.com/demos/images/nature-7.jpg",
          "https://swiperjs.com/demos/images/nature-8.jpg",];
  
  ngAfterViewInit() {
    //this.insertBeforeDiv3a()
  }
  isbegin = true;
  isend = false;
  isclick = false;
  isover = false;
  swipePrev() {
    if(this.swiper3){
    this.swiper3.swiperRef.slidePrev();
    this.isbegin = this.swiper3.swiperRef.isBeginning;
    this.isend = this.swiper3.swiperRef.isEnd;
  }
  }
  swipeNext() {
    if(this.swiper3){
    this.swiper3.swiperRef.slideNext();
    this.isbegin = this.swiper3.swiperRef.isBeginning;
    this.isend = this.swiper3.swiperRef.isEnd;
    }
  }
  checkBegin(){
    if(this.swiper3){
      this.isbegin = this.swiper3.swiperRef.isBeginning;
      this.isend = this.swiper3.swiperRef.isEnd;
      }
    this.isclick = true
  }
  public type: string = "component";

  thumbsSwiper: any;
  slides$ = new BehaviorSubject<string[]>(['']);

  public swipeToNextSlide() {
    let index;
    let ref;

      index = this.swiper3?.swiperRef.isBeginning;

  }

  constructor(private renderer:Renderer2, private el:ElementRef) {}

  ngOnInit(): void {
    //this.magnify("myimage1", 1);
    //this.magnify("myimage", 2);
    //this.insertBeforeDiv1();
    //this.insertBeforeDiv3a()
    
    this.slides$.next(
      Array.from({ length: 600 }).map((el, index) => `Slide ${index + 1}`)
    );
  }
  onSlideChange(){
    console.log('slide change');
    if(this.swiper3){
      this.isbegin = this.swiper3.swiperRef.isBeginning;
      this.isend = this.swiper3.swiperRef.isEnd;
      }
  }
 
  magnify(){
    this.insertBeforeDiv3a(this.img1,this.myglass1?.nativeElement,0);
    this.insertBeforeDiv3a(this.img2,this.myglass2?.nativeElement,1);
    this.insertBeforeDiv3a(this.img3,this.myglass3?.nativeElement,2);
    this.insertBeforeDiv3a(this.img4,this.myglass4?.nativeElement,3);
    this.insertBeforeDiv3a(this.img5,this.myglass5?.nativeElement,4);
    this.insertBeforeDiv3a(this.img6,this.myglass6?.nativeElement,5);
    this.insertBeforeDiv3a(this.img7,this.myglass7?.nativeElement,6);
    this.insertBeforeDiv3a(this.img8,this.myglass8?.nativeElement,7);
  }
  insertBeforeDiv3a(div33,glass00,index) {
    var zoom =2;
    var mydiv3 = div33;
    var glass = glass00;
    glass.style.backgroundImage = 'url('+ this.urls[index] +')';
    glass.style.backgroundRepeat = 'no-repeat';
    var width = mydiv3?.nativeElement.offsetWidth;
    var height = mydiv3?.nativeElement.offsetHeight;
    glass.style.backgroundSize =width * zoom + 'px ' + height * zoom + 'px';
    var w = glass.offsetWidth/2;
    var h = glass.offsetHeight/2;
    glass.addEventListener('mousemove', moveMagnifier);
    mydiv3?.nativeElement.addEventListener('mousemove', moveMagnifier);
    /*and also for touch screens:*/
    glass.addEventListener('touchmove', moveMagnifier);
    mydiv3?.nativeElement.addEventListener('touchmove', moveMagnifier);
    var bw=3
    function moveMagnifier(e) {
      var pos, x, y;
      /*prevent any other actions that may occur when moving over the image*/
      /*prevent the magnifier glass from being positioned outside the image:*/
      e.preventDefault();
      /*get the cursor's x and y positions:*/
      pos = getCursorPos(e);
      x = pos.x;
      y = pos.y;
      if (x > width - (w / zoom)) {x = width - (w / zoom);}
      if (x < w / zoom) {x = w / zoom;}
      if (y > height - (h / zoom)) {y = height - (h / zoom);}
      if (y < h / zoom) {y = h / zoom;}
      /*set the position of the magnifier glass:*/
      glass.style.left = x - w + 'px';
      glass.style.top = y - h +'px';
      /*display what the magnifier glass "sees":*/
      glass.style.backgroundPosition =
        '-' + (x * zoom - w + bw) + 'px -' + (y * zoom - h + bw) + 'px';
    }

    function getCursorPos(e) {
      
      var a,
        x = 0,
        y = 0;
      e = e || window.event;
      /*get the x and y positions of the image:*/
      a = mydiv3?.nativeElement.getBoundingClientRect();
      /*calculate the cursor's x and y coordinates, relative to the image:*/
      x = e.pageX - a.left;
      y = e.pageY - a.top;
      /*consider any page scrolling:*/
      x = x - window.pageXOffset;
      y = y - window.pageYOffset;
      return { x: x, y: y };
    }
  }
  

  
}
