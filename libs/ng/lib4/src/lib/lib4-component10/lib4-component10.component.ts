import { Component, OnInit } from '@angular/core';
import { SHARED_CONST } from '@happyorg/shared-utils';

@Component({
  selector: 'happyorg-lib4-component10',
  templateUrl: './lib4-component10.component.html',
  styleUrls: ['./lib4-component10.component.css']
})
export class Lib4Component10Component implements OnInit {
  sharedConst = SHARED_CONST;

  constructor() {}

  ngOnInit() {}
}
