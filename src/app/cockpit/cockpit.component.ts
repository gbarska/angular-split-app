import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})

export class CockpitComponent implements OnInit {
@Output("serverCreated") serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
@Output("blueprintCreated") blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
 // newServerName = '';
 // newServerContent = '';
 //a reference to the element, ViewChild, it is not recomended to modify the object through element ref
 @ViewChild('serverContentInput') serverContentInput: ElementRef;

  constructor() { }

  onAddServer(nameInput: HTMLInputElement) {
  this.serverCreated.emit({
    serverName: nameInput.value,
    serverContent: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
      this.blueprintCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
     });
  }

  ngOnInit() {
  }

}
