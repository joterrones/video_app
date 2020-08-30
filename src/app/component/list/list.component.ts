import { Component, OnInit, ViewChild } from '@angular/core';
import { VideoService } from '../../service/video.service';
import { DetailsComponent } from '../details/details.component';

import { MatDialog } from '@angular/material';
@Component({
  selector: 'app-list',

  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [VideoService]
})
export class ListComponent implements OnInit {
  @ViewChild(DetailsComponent, { static: true }) detail: DetailsComponent;
  videolist;
  f_detail = false;
  constructor(
    private _videoService: VideoService,
    public dialog: MatDialog,

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
          this.videolist = result.items;
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


  detalle(item): void {
    const dialogRef = this.dialog.open(DetailsComponent, {
      width: '900px',
      maxHeight: '750px',
      data: item
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }

  onScroll() {
    this.index++;
    console.log("página " + this.index);
    this.getMovie_next();
  }

  errorimg() {
    console.log("error al procesar la imágen!!")
  }

}
