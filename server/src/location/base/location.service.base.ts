import { PrismaService } from "nestjs-prisma";
import { Prisma, Location, Task } from "@prisma/client";

export class LocationServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.LocationFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.LocationFindManyArgs>
  ): Promise<number> {
    return this.prisma.location.count(args);
  }

  async findMany<T extends Prisma.LocationFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.LocationFindManyArgs>
  ): Promise<Location[]> {
    return this.prisma.location.findMany(args);
  }
  async findOne<T extends Prisma.LocationFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.LocationFindUniqueArgs>
  ): Promise<Location | null> {
    return this.prisma.location.findUnique(args);
  }
  async create<T extends Prisma.LocationCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.LocationCreateArgs>
  ): Promise<Location> {
    return this.prisma.location.create<T>(args);
  }
  async update<T extends Prisma.LocationUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.LocationUpdateArgs>
  ): Promise<Location> {
    return this.prisma.location.update<T>(args);
  }
  async delete<T extends Prisma.LocationDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.LocationDeleteArgs>
  ): Promise<Location> {
    return this.prisma.location.delete(args);
  }

  async findTasks(
    parentId: string,
    args: Prisma.TaskFindManyArgs
  ): Promise<Task[]> {
    return this.prisma.location
      .findUnique({
        where: { id: parentId },
      })
      .tasks(args);
  }
}
