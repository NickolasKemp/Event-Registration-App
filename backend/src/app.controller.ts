import { Controller} from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Controller()
export class AppController {
  constructor(private readonly prismaService: PrismaService) {}

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }
}
