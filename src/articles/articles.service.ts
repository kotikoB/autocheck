import { Injectable } from '@nestjs/common';
import { Article } from './interface/article.interface';

@Injectable()
export class ArticlesService {
  private readonly articles: Article[] = [
    {
      id: 'rwqq3ewr',
      name: 'Atricle One',
      qty: 50,
      description: 'This is article one',
    },
  ];

  findAll(): Article[] {
    return this.articles;
  }
}
