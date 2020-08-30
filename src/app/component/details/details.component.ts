import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  private item;
  constructor() { }

  ngOnInit() {
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
