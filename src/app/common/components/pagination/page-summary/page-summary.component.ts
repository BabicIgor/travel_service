declare var require: any
import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'page-summary',
  templateUrl: `./page-summary.component.html`,
  changeDetection: ChangeDetectionStrategy.Default
})
export class PageSummaryComponent implements OnInit {
  protected _itemsPerPage: number;
  protected _totalItems: number;
  protected _currentPage: number;

  public startIndex: number;
  public endIndex: number;

  @Input()
  public get totalItems(): number {
    return this._totalItems;
  }

  public set totalItems(v: number) {
    this._totalItems = v;
    this.calculate();
  }

  @Input()
  public get currentPage(): number {
    return this._currentPage;
  }

  public set currentPage(v: number) {
    this._currentPage = v;
    this.calculate();
  }

  @Input()
  public get itemsPerPage(): number {
    return this._itemsPerPage;
  }

  public set itemsPerPage(v: number) {
    this._itemsPerPage = v;
    this.calculate();
  }

  public ngOnInit(): void {
  }

  private calculate(): void {
    if (!(this._currentPage && this._itemsPerPage && this._currentPage)) {
      return;
    }

    this.startIndex = (this._currentPage - 1) * this._itemsPerPage + 1;
    const i1 = this._currentPage * this._itemsPerPage;

    this.endIndex = i1 > this._totalItems ? this._totalItems : i1;
  }
}
