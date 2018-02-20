import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() items = null;
  @Input() selectedItem;
  @Output() onSelectProduct = new EventEmitter<Object>();

  throttle = 300;
  scrollDistance = 1;
  scrollUpDistance = 2;

  from = 0;
  to = 12;
  visibleItems = [];

  constructor() { }

  ngOnInit() {
    this.onScrollToDown();
  }

  updateFromTo = () => {
    this.from = this.to;
    this.to = this.to * 2;
  }

  onScrollToDown () {
    if (this.from <= this.items.length - 1) {
      if (this.to <= this.items.length - 1) {
        this.visibleItems = this.visibleItems.concat(this.items.slice(this.from, this.to));
        this.updateFromTo();
      } else {
        this.visibleItems = this.visibleItems.concat(this.items.slice(this.from));
        this.updateFromTo();
      }
    }
  }

  chooseItem (selectedItem) {
    this.onSelectProduct.emit(selectedItem);
  }

  openImage (imageUrl) {
    window.open(imageUrl);
  }
}
