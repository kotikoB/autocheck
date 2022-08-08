import { Controller, Get } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { Story } from './interface/article.interface';
import { AxiosResponse } from 'Axios';
import { Observable } from 'rxjs/internal/Observable';

@Controller('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @Get()
  findAll(): Observable<AxiosResponse<Story[]>> {
    return this.articlesService.findAll();
  }
}
