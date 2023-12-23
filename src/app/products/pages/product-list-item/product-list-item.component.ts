import { Component, Input } from '@angular/core';
import { Product } from '../../product';

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.scss']
})
export class ProductListItemComponent {
Number(arg0: number|undefined): string|any[]|null|undefined {
throw new Error('Method not implemented.');
}
  @Input() item!: Product | null;

  constructor(){}

  ngOnInit(): void {
  }

}
