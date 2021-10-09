import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom //hidden CSS classes
})
export class ServerElementComponent implements OnInit {
  @Input("srvElement") element: { type: string, name: string, content: string }; //element property, able to bind by parent

  constructor() {

  }

  ngOnInit(): void {
  }

}
