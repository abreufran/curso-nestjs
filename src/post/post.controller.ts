import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { CreatePostDto } from './dtos';

@Controller('post')
export class PostController {

    @Get()
    getMany() {
        return 'OK';
    }

    @Get(':id')
    getOne(@Param('id', ParseIntPipe) id: number) {
        console.log(typeof id);
        return {
            message: 'getOne'
        };
    }

    @Post()
    createOne(
        @Body() dto: CreatePostDto
    ){
        return dto;
    }

    editOne(){}

    deleteOne(){}
}
