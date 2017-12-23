import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import * as xml2js from 'xml2js';


@Injectable()
export class ProductService {
    constructor(
        private http: Http
    ) { }

    getProducts(url) {
        const headers = new Headers();
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Credentials', 'true');
        headers.append('Access-Control-Request-Headers', 'Content-type,X-Requested-With,Origin,accept');
        headers.append('Accept', 'application/xml');
        headers.append('Content-Type', 'text/xml');

        const options = new RequestOptions({ headers: headers });

        return this.http.get(url)
            .map((res: Response) => res.text());
    }

}
