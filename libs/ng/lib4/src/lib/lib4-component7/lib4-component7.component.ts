import { Component, OnInit } from '@angular/core';
import { SHARED_CONST } from '@happyorg/shared-utils';

@Component({
  selector: 'happyorg-lib4-component7',
  templateUrl: './lib4-component7.component.html',
  styleUrls: ['./lib4-component7.component.css']
})
export class Lib4Component7Component implements OnInit {
  sharedConst = SHARED_CONST;

  constructor() {}

  ngOnInit() {}
}
