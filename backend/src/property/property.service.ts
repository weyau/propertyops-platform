import { Injectable } from '@nestjs/common';
import { CreatePropertyDto } from './dto/create-property.dto';
import { UpdatePropertyDto } from './dto/update-property.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PropertyService {
  constructor(private readonly prisma: PrismaService) {}

  create(createPropertyDto: CreatePropertyDto) {
    return this.prisma.property.create({
      data: createPropertyDto,
    });
  }

  findAll() {
    return this.prisma.property.findMany();
  }

  findOne(id: string) {
    return this.prisma.property.findUnique({
      where: { id },
    });
  }

  update(id: string, updatePropertyDto: UpdatePropertyDto) {
    return this.prisma.property.update({
      where: { id },
      data: updatePropertyDto,
    });
  }

  remove(id: string) {
    return this.prisma.property.delete({
      where: { id },
    });
  }
}
