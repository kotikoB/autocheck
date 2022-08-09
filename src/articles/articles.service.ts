import { Injectable } from '@nestjs/common';
import { Story } from './interface/article.interface';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'Axios';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
@Injectable()
export class ArticlesService {
  constructor(private http: HttpService) {}

  fetchStory(id: number): Observable<Story> {
    const url = `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`;
    const story = this.http.get(url);

    return story.pipe(
      map((x) => {
        return {
          id: x.data.id,
          type: x.data.type,
          by: x.data.by,
        };
      }),
    );
  }

  findAll(): Observable<Story[]> {
    const topStoriesList = this.http.get('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty');
    const stories: Story[] = [];
    const ids = topStoriesList.pipe(
      map((data: AxiosResponse) => {
        return data.data;
      }),
      map((list) => {
        return list.map((id) => {
          const story = this.fetchStory(id);
          return story;
        });
      }),
      map((list) => {
        list.forEach((x) => {
          x.subscribe({
            next(value) {
              console.log(value);
            },
          });
          return x;
        });
        return list;
      }),
    );

    return ids;
  }
}

/**
 *const observableList = data.data.map((element) => {
          const story = this.fetchStory(element);
          story.subscribe({
            next(value) {
              stories.push(value);
              console.log(value);
            },
          });
          return story;
        });
        return observableList;
 *
 */
