import { Controller, Get, Post, Request } from '@nestjs/common';

@Controller('api/files')
export class FilesController {
    @Get('list')
    getFiles(@Request() req) {
        console.log(req.query);
        return req.query;
    };

    @Post('add')
    addFiles(@Request() req) {
        console.log(req)
    }

    @Post('edit')
    editFiles(@Request() req) {
        console.log(req)
    }

    @Post('del')
    delFiles(@Request() req) {
        console.log(req)
    }
}
