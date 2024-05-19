import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ParticipantService } from './participant.service';
import { ParticipantDto } from './participant.dto';

@Controller('participant')
export class ParticipantController {
  constructor(private readonly participantService: ParticipantService) {}

  @Post()
  create(@Body() dto: ParticipantDto) {
    return this.participantService.create(dto);
  }

  @Get()
  findAll() {
    return this.participantService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.participantService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: ParticipantDto) {
    return this.participantService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.participantService.remove(id);
  }
}
