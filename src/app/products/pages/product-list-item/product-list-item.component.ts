import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.scss']
})
export class ProductListItemComponent {
  @Input() item:any;

  constructor(){}

  ngOnInit(): void {
  }

}
