import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  constructor() { }

@Input('setting') setting : string ;
@Output() clickEvent = new EventEmitter();
 notify = "CLICKED";

  ngOnInit() {
    console.log(this.setting);
    
    // console.log(this.color);
    
  }
  setStyle() {
    return this.setting
  }
  showNotify() {
    this.clickEvent.emit(this.notify)
    
  }

}
