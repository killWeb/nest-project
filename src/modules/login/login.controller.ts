import { Controller, Get, Post, HttpCode, Request, Body } from '@nestjs/common';

const tokens = {
    admin: {
        token: 'admin-token'
    }
}

const user = {
    'admin-token': {
        roles: ['admin'],
        introduction: 'I am a super administrator',
        avatar: 'https://img0.baidu.com/it/u=1184492450,1027944304&fm=26&fmt=auto&gp=0.jpg',
        name: 'yibo.wei'
    }
}
@Controller('api/user')
export class LoginController {
    @Post('login.paper')
    @HttpCode(200)
    login(@Body() body) {
        console.log(body);
        return {
            code: 20000,
            data: tokens['admin']['token']
        }
    }

    @Get('info.paper')
    @HttpCode(200)
    getInfo(@Request() res) {
        const query = res.query;
        console.log(query);
        return user['admin-token']
    }
}
