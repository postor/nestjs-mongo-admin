import { Controller, Get, Post, Body, Param, Delete, Put, Query } from '@nestjs/common';
import { PostsService } from './posts.service';

@Controller('api/posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) { }

  @Post()
  create(@Body() createUserDto: any) {
    return this.postsService.create(createUserDto);
  }
  @Get()
  async findAll(
    @Query('page') page = 1, // Get page from query params (default 1)
    @Query('perPage') perPage = 10, // Get items per page (default 10)
  ) {
    const list = await this.postsService.findAll(page, perPage);
    const total = await this.postsService.count(); // Get total user count
    return {
      data: list,
      total,
    };
  }


  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postsService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateObj: any) {
    return this.postsService.update(id, updateObj);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postsService.remove(id);
  }
}
