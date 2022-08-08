import { Injectable } from '@nestjs/common';
import { Story } from './interface/article.interface';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'Axios';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';

@Injectable()
export class ArticlesService {
  constructor(private http: HttpService) {}

  topStories = this.http
    .get('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
    .pipe(map((response) => response.data));

  findAll(): Observable<AxiosResponse<Story[]>> {
    this.topStories.forEach((x: Story) => {
      this.http.get(
        `https://hacker-news.firebaseio.com/v0/item/{x.id}.json?print=pretty`,
      );
    });

    return this.http.get(
      'https://hacker-news.firebaseio.com/v0/item/8863.json?print=pretty',
    );
  }
}
