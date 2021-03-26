import {
  Renderer2,
  ElementRef,
  ChangeDetectionStrategy,
  AfterViewInit,
  Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  providers:  [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent implements AfterViewInit {
  
  constructor(
    private renderer2: Renderer2,
    private el: ElementRef
  ) {}

  ngAfterViewInit() {
    const s = this.renderer2.createElement('script');
    s.type = 'text/javascript';
    s.text = `
      function footerCallback(json_data){
        document.getElementById('footer').outerHTML = json_data[0];
      }
      window.onload = function() {
        var script = document.createElement('script');
        script.src = 'assets/static-footer.json'
        script.async = true;
        document.getElementsByTagName('head')[0].appendChild(script);
      }
    `.trim();
    this.renderer2.appendChild(this.el.nativeElement, s);
  }
}
