import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[wcgImageLoader]'
})
export class ImageLoaderDirective {
  @Input() loaderImg: string = 'assets/images/preloader.svg';

  constructor(
    private el: ElementRef,
  ) {
    this.el.nativeElement.style['background-image'] = `url('${this.loaderImg}')`;
    this.el.nativeElement.style['background-repeat'] = 'no-repeat';
    this.el.nativeElement.style['background-position'] = 'center center';
    // this.el.nativeElement.style['background-size'] = 'contain';
  }

  @HostListener('load')
  loadImage() {
    this.el.nativeElement.style['background'] = `none`;
  }
}