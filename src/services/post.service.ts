import {Injectable} from '@angular/core';
import {RestService} from "./rest.service";
import {Http} from "@angular/http";


@Injectable()
export class PostService extends RestService {

  constructor(http: Http) { super(http); }

  private baseUrl: string = 'posts/'

  public submit(data: {title: string, body: string}): Promise<any> {
    return this.post(this.baseUrl, data)
  }

  public get allPosts(): Promise<any> {
    return this.retrieve(this.baseUrl);
  }

  public accept(_id: string): Promise<any> {
    return this.post(this.baseUrl + _id + '/accept', {});
  }

  public decline(_id: string): Promise<any> {
    return this.post(this.baseUrl + _id + '/decline', {});
  }

  public voteForPost(_id: string): Promise<any> {
    return this.post(this.baseUrl + _id + '/vote', {});
  }

  public postToCurrent(_id: string, data: {date: Date, info: string, meeting: boolean}): Promise<any> {
    return this.post(this.baseUrl + _id + '/meeting', data);
  }

}
