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
