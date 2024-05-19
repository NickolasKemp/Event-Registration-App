import { Injectable } from '@nestjs/common';
import { ParticipantDto } from './participant.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ParticipantService {
  constructor(private prisma: PrismaService) {}

  create(dto: ParticipantDto) {
    return this.prisma.participant.create({
      data: dto,
    });
  }

  findAll() {
    return this.prisma.participant.findMany({
      include: { event: true },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} participant`;
  }

  update(id: string, dto: ParticipantDto) {
    return `This action updates a #${id} participant ${dto}`;
  }

  remove(id: string) {
    return this.prisma.participant.delete({
      where: { id: id },
    });
  }
}
