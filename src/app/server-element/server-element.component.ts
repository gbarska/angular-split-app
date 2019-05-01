import {  Component,
          OnInit,
          Input, 
          ViewEncapsulation, 
          OnChanges, 
          SimpleChanges,
          DoCheck,
          AfterContentInit,
          AfterContentChecked,
          AfterViewInit,
          AfterViewChecked,
          OnDestroy,
          ViewChild,
          ElementRef,
          ContentChild
        } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated //none, Native
})

export class ServerElementComponent implements
 OnInit,
 OnChanges, 
 DoCheck, 
 AfterContentInit,
 AfterContentChecked,
 AfterViewInit,
 AfterViewChecked,
 OnDestroy
 {

@Input("serverElement")  element: {type: string, name: string, content: string};
@Input() name: string;//primitive type, once it changes the ngOnChange get fired
@ViewChild('heading') header: ElementRef; 
@ContentChild('contentParagraph') paragraph:ElementRef;

  constructor() { 
    console.log("constructor");
  }

  ngOnInit() {
    console.log("ngoninit");
    console.log("the heading text: " + this.header.nativeElement.textContent);
    console.log("Text content of paragraph: "+ this.paragraph.nativeElement.textContent);
  }

  ngOnChanges(changes: SimpleChanges){
    console.log("ngonchanges");
    console.log(changes);
  }

  ngDoCheck(){
    console.log("ngdocheck");
  }

  ngAfterContentInit(){
    console.log("AfterngContentInit");
    console.log("Text content of paragraph: "+ this.paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked(){
    console.log("AfterngContentChecked");
  }


  ngAfterViewInit(){
    console.log("ngAfterViewInit");
    console.log("the heading text: " + this.header.nativeElement.textContent);
  }

  ngAfterViewChecked(){
    console.log("ngAfterViewChecked");
  }

  ngOnDestroy(){
    console.log("ngOnDestroy");
  }
}
