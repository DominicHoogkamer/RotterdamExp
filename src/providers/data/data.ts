import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';


/*
  Generated class for the DataProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class DataProvider {

  private url: string = 'https://westus.api.cognitive.microsoft.com/emotion/v1.0/recognize?'

  constructor(public http: Http) {
    console.log('Hello DataProvider Provider');
  }

  getMood(imageUrl: string) {
    let testImg = this.makeBlob(imageUrl);
    const headers = new Headers({
      'Content-Type': 'application/octet-stream',
      'processData': false,
      'Ocp-Apim-Subscription-Key': '1ad8aeebdacd4ea2b62e156e8307ce9f'
    });
    const options = new RequestOptions({ headers });

    return this.http.post(this.url, {responseType: testImg}, options)
    .subscribe(
      data => {
        let image = data.arrayBuffer();
      },
      err => console.log(err)
    )

  }

  makeBlob(dataURL) {
            var BASE64_MARKER = ';base64,';
            if (dataURL.indexOf(BASE64_MARKER) == -1) {
                var parts = dataURL.split(',');
                var contentType = parts[0].split(':')[1];
                var raw = decodeURIComponent(parts[1]);
                return new Blob([raw], { type: contentType });
            }
            var parts = dataURL.split(BASE64_MARKER);
            var contentType = parts[0].split(':')[1];
            var raw = window.atob(parts[1]);
            var rawLength = raw.length;

            var uInt8Array = new Uint8Array(rawLength);

            for (var i = 0; i < rawLength; ++i) {
                uInt8Array[i] = raw.charCodeAt(i);
            }

            return new Blob([uInt8Array], { type: contentType });
  }

}
