import {Injectable} from '@angular/core';
import {Http, RequestOptions, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class NoticiasService{
      data: any;

  constructor(public http: Http) {
    console.log('Hello RestService Provider');
  }

  load() {
    if (this.data) {
      // already loaded data
      return Promise.resolve(this.data);
    }
    let opt: RequestOptions;
    let myHeaders: Headers = new Headers;
    myHeaders.append('X-CSRF-Token', 'SampToken-mwNpuasdYv9EbBIk8r6YhRRX1Be4o')
    opt = new RequestOptions({
      headers: myHeaders
    })
    // don't have the data yet
    return new Promise(resolve => {
      // We're using Angular HTTP provider to request the data,
      // then on the response, it'll map the JSON data to a parsed JS object.
      // Next, we process the data and resolve the promise with the new data.
      this.http.get('https://platzi.com/blog/', opt) 
        .map(res => res.json())
        .subscribe(data => {
          // we've got back the raw data, now generate the core schedule data
          // and save the data for later reference
          this.data = data;
          resolve(this.data);
        });
    });
  }
}
