import { Component, OnInit, ViewChild } from '@angular/core';
import { VideoService } from '../../service/video.service';
import { DetailsComponent } from '../details/details.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [VideoService]
})
export class ListComponent implements OnInit {
  @ViewChild(DetailsComponent, { static: true }) detail: DetailsComponent;
  private videolist = [];
  constructor(private _videoService: VideoService) { }

  ngOnInit() {
    this.getMovie();
  }

  getMovie() {
    this._videoService.get().subscribe(
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
  detalle(item): void {
    console.log(item);
    this.detail.detalleitem(item);
  }

  onScroll() {
    console.log('scrolled!!');
  }

}
