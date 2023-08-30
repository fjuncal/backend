/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/shared/prisma_service/prisma.service';

@Injectable()
export class StuffService {
  constructor(private readonly prisma: PrismaService) {}

  create(createStuffDto: Prisma.StuffCreateInput) {
    return this.prisma.stuff.create({
      data: createStuffDto,
    });
  }

  findAll() {
    return this.prisma.stuff.findMany({
      include: {
        category: true,
      },
    });
  }

  findOne(id: number) {
    return this.prisma.stuff.findUnique({
      where: {
        id: id,
      },
    });
  }

  update(id: number, updateStuffDto: Prisma.StuffUpdateInput) {
    return this.prisma.stuff.update({
      data: updateStuffDto,
      where: {
        id: id,
      },
    });
  }

  remove(id: number) {
    return this.prisma.stuff.delete({
      where: {
        id: id,
      },
    });
  }
}
