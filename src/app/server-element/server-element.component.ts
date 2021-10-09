import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChange, SimpleChanges, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom //hidden CSS classes
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input("srvElement") element: { type: string, name: string, content: string }; //element property, able to bind by parent
  @Input() name: string
  @ViewChild("heading", { static: true }) header: ElementRef

  constructor() {
    console.log("constructor called")
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("ngOnChanges called")
    console.log(changes)
  }

  ngDoCheck() {
    console.log("ngDoCheck Called!")
  }

  ngOnInit(): void {
    console.log("ngOnInit called")
    console.log(this.header.nativeElement.textContent);
  }

  ngAfterContentInit() {
    console.log("ngAfterContentInit called")
  }

  ngAfterContentChecked() {
    console.log("ngAfterContentChecked called")
  }

  ngAfterViewChecked() {
    console.log("ngAfterViewChecked called")
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit called")
    console.log(this.header.nativeElement.textContent);
  }

  ngOnDestroy() {
    console.log("ngOnDestroy Called")
  }
}
