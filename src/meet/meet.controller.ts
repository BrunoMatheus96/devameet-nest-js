import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, Request } from '@nestjs/common';
import { MeetService } from './meet.service';
import { GetMeetDto } from './dtos/getmeet.dto';
import { CreateMeetDto } from './dtos/createmeet.dto';
import { UpdateMeetDto } from './dtos/updatemeet.dto';

@Controller('meet')
export class MeetController {
    constructor(
        private readonly service: MeetService) { }

    @Get()
    async getUser(@Request() req) {
        const { userId } = req?.user;
        const result = await this.service.getMeetsByUser(userId);

        return result?.map((m) => ({
            id: m._id.toString(),
            name: m.name,
            color: m.color,
            link: m.link,
        }) as GetMeetDto);
    }

    @Post()
    @HttpCode(HttpStatus.OK)
    async createMeet(@Request() req, @Body() dto: CreateMeetDto) {
        const { userId } = req?.user;
        await this.service.createMeet(userId, dto);
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    async deleteMeet(@Param() params, @Request() req) {
        const { userId } = req?.user;
        const { id } = params;
        await this.service.deleteMeetByUser(userId, id);
    }

    @Get('objects/:id')
    async getMeetObjectsByMeetId(@Request() req, @Param() params) {
        const { userId } = req?.user;
        const { id } = params;
        return await this.service.getMeetObjects(id, userId);

        //return result;
    }

    @Put(':id')
    @HttpCode(HttpStatus.OK)
    async updateMeet(@Param() params, @Request() req, @Body() dto: UpdateMeetDto) {
        const { userId } = req?.user;
        const { id } = params;
        await this.service.update(id, userId, dto);
    }
}
