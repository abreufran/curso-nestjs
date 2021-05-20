import { Body, Controller, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { CreatePostDto } from './dtos';
import { EditPostDto } from './dtos/edit-post.dto';

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

    @Put(':id')
    editOne(
        @Param('id', ParseIntPipe) id: number,
        @Body() dto: EditPostDto
    ){
        return dto;
    }

    deleteOne(){}
}
