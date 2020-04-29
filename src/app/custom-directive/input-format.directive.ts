import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {

  @Input('appInputFormat') format;

  constructor(private el:ElementRef) { }


  @HostListener('focus') onFocus() {
     console.log("On Focus");
  }

  @HostListener('blur') onBlur() {
    let value : string = this.el.nativeElement.value;
    console.log(this.format);

    if (this.format == 'uppercase') {
      console.log(value);
      this.el.nativeElement.value = value.toUpperCase();
    } else {
      this.el.nativeElement.value = value.toLowerCase();
    }

    console.log("On Blur");
 }



}
