import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { CreatePostDto } from './dtos';
import { EditPostDto } from './dtos/edit-post.dto';
import { PostService } from './post.service';

@Controller('post')
export class PostController {

    constructor(private readonly postService: PostService) {}

    @Get()
    async getMany() {
        const data = await this.postService.getMany();
        return {
            message: 'Petición Correcta',
            data: data
        }
    }

    @Get(':id')
    getOne(@Param('id', ParseIntPipe) id: number) {
        return this.postService.getOne(id);
    }

    
    @Post()
    createOne(
        @Body() dto: CreatePostDto
    ){
        return this.postService.createOne(dto);
    }

    @Put(':id')
    editOne(
        @Param('id', ParseIntPipe) id: number,
        @Body() dto: EditPostDto
    ){
        return this.postService.editOne(id, dto);
    }

    @Delete(':id')
    deleteOne(@Param('id', ParseIntPipe) id: number){
        return this.postService.deleteOne(id);
    }
}
