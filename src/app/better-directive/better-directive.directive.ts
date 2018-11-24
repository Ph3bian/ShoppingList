import { Directive, Renderer2, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBetterDirective]'
})
export class BetterDirectiveDirective implements OnInit {

  constructor(private  elR: ElementRef, private renderer: Renderer2){

  } 
ngOnInit(){
  this.renderer.setStyle(this.elR.nativeElement, 'color', "blue")
}
}
