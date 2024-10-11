import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { Book } from './interfaces/book.interface';
import { CreateBookDto } from './interfaces/dto/create-book';
import { UpdateBookDto } from './interfaces/dto/update-book';

@Controller('books')
export class BooksController {
  constructor(private bookService: BooksService) {}

  @Post()
  create(@Body() createBookDto: CreateBookDto) {
    this.bookService.create(createBookDto);
  }

  @Get()
  async findAll(): Promise<Book[]> {
    return this.bookService.getAll();
  }

  @Put(':id')
  public update(@Param() { id }: { id: string }, @Body() body: UpdateBookDto) {
    return this.bookService.update(id, body);
  }

  @Delete(':id')
  public delete(@Param() { id }: { id: string }) {
    return this.bookService.delete(id);
  }
}
