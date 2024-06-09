import { Controller, Get, Post, Body, Param, Delete, Put, Query } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('api/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Post()
  create(@Body() createUserDto: any) {
    return this.usersService.create(createUserDto);
  }
  @Get()
  async findAll(
    @Query('page') page = 1, // Get page from query params (default 1)
    @Query('perPage') perPage = 10, // Get items per page (default 10)
  ) {
    const users = await this.usersService.findAll(page, perPage);
    const total = await this.usersService.count(); // Get total user count
    return {
      data: users,
      total,
    };
  }


  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateUserDto: any) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }

  @Get('byIds')
  async findByIds(@Query('ids') idsString: string) {
    const ids = idsString.split(',').map(id => parseInt(id, 10)); // Convert to numbers
    return this.usersService.findByIds(ids);
  }
}
