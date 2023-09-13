import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { StuffService } from './stuff.service';
import { Prisma } from '@prisma/client';
import { AuthGuard } from 'src/auth/guards/auth.guard';

@UseGuards(AuthGuard)
@Controller('stuff')
export class StuffController {
  constructor(private readonly stuffService: StuffService) {}

  @Post()
  create(@Body() createStuffDto: Prisma.StuffCreateInput) {
    return this.stuffService.create(createStuffDto);
  }

  @Get()
  findAll() {
    return this.stuffService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.stuffService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateStuffDto: Prisma.StuffUpdateInput,
  ) {
    return this.stuffService.update(+id, updateStuffDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.stuffService.remove(+id);
  }
}
