import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  @Input()
  name = 'Harshal';

  @Output()
  helloEvent = new EventEmitter<any>();
  

  constructor() { }

  ngOnInit() {
  }

  userClikced() {
    // alert('hey there' + this.name );
    this.helloEvent.emit('Hi');
  }

}
