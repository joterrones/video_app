import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable()
export class VideoService {

    public url: String;
    public credentials: any;
    public basic: any;

    constructor(public _http: HttpClient) {
        this.url = 'https://api.themoviedb.org/3/';
    }

    get(index): Observable<any> {
        return this._http.get(this.url + 'list/1?page='+index+'&api_key=10cb90c6d244b3a30f28a379482c3267', {});
    }

 
}