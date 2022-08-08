import { Controller, Get } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { Article } from './interface/article.interface';

@Controller('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @Get()
  findAll(): Article[] {
    return this.articlesService.findAll();
  }
}
