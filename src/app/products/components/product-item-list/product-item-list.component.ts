import { Component } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { CartService } from '../../service/cart.service';
import { Observable, Subject, takeUntil } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

export interface ProductItem {
  id: number;
  title: string;
  price: number;
  discountPercentage: number;
  stock: number;
  brand: string;
  thumbnail: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];
@Component({
  selector: 'app-product-item-list',
  templateUrl: './product-item-list.component.html',
  styleUrls: ['./product-item-list.component.scss'],
})
export class ProductItemListComponent {
  cartItems$: Observable<any[]> = this.cartService.cartItems$;
  // dataSource: any = new MatTableDataSource<any>(this.cartItems$);
  dataSource: any[] = []

  displayedColumns: string[] = [
    'select',
    'id',
    'title',
    'price',
    'brand',
  ];
  selection = new SelectionModel<PeriodicElement>(true, []);
  private destroy$: Subject<void> = new Subject<void>();

  constructor(private cartService: CartService) {

  }

  ngOnInit(): void {
    // this.cartItems$ = this.cartService.cartItems$;
    this.cartItems$.pipe(takeUntil(this.destroy$)).subscribe(items => {
      console.log(items);
      this.dataSource = items
    });
  }

  ngOnDestroy(){
    this.destroy$.next();
    this.destroy$.complete();
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1
      }`;
  }
}
