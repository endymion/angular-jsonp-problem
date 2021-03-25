import {
  Component,
  AfterViewInit,
  ChangeDetectionStrategy,
  ElementRef,
  Renderer2
} from '@angular/core';

import { FooterService } from './footer.service'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  providers:  [ FooterService ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent implements AfterViewInit {
  
  constructor(private footerService: FooterService,
    private elementRef: ElementRef,
    private renderer: Renderer2) { }

  ngAfterViewInit() {
    this.addScript();
    this.footerService.getFooter().subscribe((data: string[]) => { this.footerCallback(data) });
  }

  private addScript() {
    // Wrap the ng_jsonp_callback_0 with footerCallback 
    const scriptSrc = `window.footerCallback = function(json_data) {window.ng_jsonp_callback_0(json_data);}`;
    const scriptElement: HTMLScriptElement = this.renderer.createElement('script');
    scriptElement.innerHTML = scriptSrc;
    this.renderer.appendChild(this.elementRef.nativeElement, scriptElement);
  }

  // Insert a new Element with the json_data
  private footerCallback(json_data: string[]) {
    const footerElement: HTMLElement = this.renderer.createElement('div');
    footerElement.innerHTML = json_data[0];
    this.renderer.appendChild(this.elementRef.nativeElement, footerElement);
  }
}
