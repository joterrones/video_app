import { Component, OnInit, ViewChild } from '@angular/core';
import { VideoService } from '../../service/video.service';
import { DetailsComponent } from '../details/details.component';
import { Observable, of } from "rxjs";
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-list',

  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [VideoService]
})
export class ListComponent implements OnInit {
  @ViewChild(DetailsComponent, { static: true }) detail: DetailsComponent;
  //private videolist = [];

  videolist;
  constructor(
    private _videoService: VideoService,

  ) { }
  index = 1;

  ngOnInit() {
    this.getMovie();
  }

  getMovie() {
    this._videoService.get(1).subscribe(
      result => {
        console.log(result);
        try {
          this.videolist =result.items;
        } catch (error) {
          console.log(error.stack);
        } finally {

        }
      }, error => {
        console.log(error.stack);
      });
  }

  getMovie_next() {
    this._videoService.get(this.index).subscribe(
      result => {
        console.log(result);
        try {
          this.videolist = this.videolist.concat(result.items);
        } catch (error) {
          console.log(error.stack);
        } finally {

        }
      }, error => {
        console.log(error.stack);
      });
  }

 /* getMovie() {
    this.videolist$= this._videoService.get(this.index);
    csonole.log(this.videolist$);
  }*/

  detalle(item): void {
    console.log(item);
    this.detail.detalleitem(item);
  }

  onScroll() {

    this.index++;
    console.log("página "+ this.index);
    this.getMovie_next();
  }

  errorimg() {
    console.log("error al procesar la imágen!!")
  }

}
