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

}

// This callback has to be defined in the global scope.
function footerCallback(json_data){
  document.getElementById('footer').outerHTML = json_data[0];
}
const _global = (window) as any
_global.footerCallback = footerCallback

