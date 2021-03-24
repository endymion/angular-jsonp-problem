import {
  Component,
  AfterViewInit,
  ChangeDetectionStrategy
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

  constructor(private footerService: FooterService) { }

  ngAfterViewInit() {
    console.log("ngAfterViewInit()")
    console.log("footer: " + JSON.stringify(this.footerService.getFooter()))
  }

  // function footerCallback(json_data){
  //   document.getElementById('lazyFooter').outerHTML = json_data[0];
  // }
  // window.onload = function() {
  //   var script = document.createElement('script');
  //   script.src = 'https://footers.hakkasangroup.com/footer.min.json'
  //   script.async = true;
  //   document.getElementsByTagName('head')[0].appendChild(script);
  // }

}
