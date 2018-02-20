import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  @Input() selectedItem;
  @Output() onClosePanel = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {

  }

  closePanel() {
    this.onClosePanel.emit(true);
  }
}
