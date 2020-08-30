import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  private item;
  constructor(public dialogRef: MatDialogRef<DetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(
  ) {
    this.item = this.data;
    this.item.rutafoto= this.transform(this.item.backdrop_path);
  }

  public detalleitem(item):void {
    this.item = item;
    item.rutafoto= this.transform(this.item.backdrop_path);
    console.log(item)
  }

  transform(value: string): string {
    return `url(https://image.tmdb.org/t/p/w500${value})`
  }

}
