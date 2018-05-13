import {Http, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {Storage} from '@ionic/storage';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';


let storage: Storage = new Storage();


export abstract class RestService {

  constructor(private http: Http){}

  private API_URL: string = 'http://localhost:3000/';

  private getUrl(url: string): string {
    return `${this.API_URL + url}`;
  }

  private get setHeaders(): Promise<Headers> {
    return storage.ready().then(
      () => storage.get('token').then(
        (token: string) => {
          if(token){
            return new Headers({'Authorization': 'Bearer ' + token});
          } else {
            return new Headers({});
          }
        }
      )
    );
  }

  protected post(url: string, data: any): Promise<any> {

    return this.setHeaders.then(
      (headers: Headers) => {
        return this.http.post(this.getUrl(url), data, {headers})
          .catch((err: Response) => Observable.throw(err))
          .map((res: Response) => res.json())
          .toPromise();
      }
    )
  }

  protected retrieve(url: string): Promise<any> {
    return this.setHeaders.then(
      (headers: Headers) => {
        return this.http.get(this.getUrl(url), {headers})
          .catch((err: Response) => Observable.throw(err))
          .map((res: Response) => res.json())
          .toPromise();
      }
    )
  }


}
