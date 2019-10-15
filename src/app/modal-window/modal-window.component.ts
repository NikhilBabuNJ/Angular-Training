import { Component, OnInit, Input, SimpleChanges, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.css']
})
export class ModalWindowComponent implements OnInit {

  @Input() public isModalWindow: boolean;
  @Output() isModalClosed = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.isModalWindow = changes.isModalWindow.currentValue;
  }

  onClose() {
    this.isModalWindow = false;
    this.isModalClosed.emit(false);
  }
}
