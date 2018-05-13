import {Injectable} from "@angular/core";
import {RestService} from "./rest.service";
import {Http} from "@angular/http";
import {Storage} from '@ionic/storage';


let storage: Storage = new Storage();

@Injectable()
export class AuthService extends RestService {

  constructor(http: Http) { super(http); }

  private baseUrl: string = 'auth/';

  public register(data: {email: string, password: string}): Promise<any> {
    return this.post(this.baseUrl + 'register', data);
  }

  public login(data: {email: string, password: string}): Promise<any> {
    return this.post(this.baseUrl + 'authenticate', data);
  }

  public get isAuthenticated(): Promise<boolean> {
    return storage.ready().then(
      () => storage.get('token').then(
        (token: string) => {
          return !!token && !!token.length;
        }
      )
    );
  }

}
