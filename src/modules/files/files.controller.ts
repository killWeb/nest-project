import { Controller, Get, Post, Request } from '@nestjs/common';

@Controller('api/files')
export class FilesController {
    @Get('list.paper')
    getFiles(@Request() req) {
        console.log(req.query);
        return [{
            name: '1111.png',
            path: 'efbje/efef/efe.png',
            id: ''
        }];
    };

    @Post('add.paper')
    addFiles(@Request() req) {
        console.log(req)
    }

    @Post('edit.paper')
    editFiles(@Request() req) {
        console.log(req)
    }

    @Post('del.paper')
    delFiles(@Request() req) {
        console.log(req)
    }
}
