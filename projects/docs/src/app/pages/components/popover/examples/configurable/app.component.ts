import { Component, OnInit } from '@angular/core';
import { MtxPopoverPositionEnd, MtxPopoverPositionStart } from '@ng-matero/extensions/popover';

@Component({
  selector: 'popover-example',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  enterDelay = 200;
  leaveDelay = 200;
  xOffset = 0;
  yOffset = 0;
  closeOnPanelClick = false;
  triggerOn: 'hover' | 'click' = 'hover';

  positionXOptions = ['before', 'after'];
  positionYOptions = ['above', 'below'];

  positionStartOptions = [...this.positionYOptions, ...this.positionXOptions];
  positionEndOptions: any[] = [];

  positionStart: MtxPopoverPositionStart = 'below';
  positionEnd: MtxPopoverPositionEnd = 'after';

  onPositionStartChange(value?: string) {
    if (this.positionXOptions.includes(this.positionStart)) {
      this.positionEnd = 'below';
      this.positionEndOptions = [...this.positionYOptions, 'center'];
    }

    if (this.positionYOptions.includes(this.positionStart)) {
      this.positionEnd = 'after';
      this.positionEndOptions = [...this.positionXOptions, 'center'];
    }
  }

  ngOnInit() {
    this.onPositionStartChange();
  }
}
