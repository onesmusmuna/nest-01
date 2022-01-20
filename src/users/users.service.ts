import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private repo: Repository<User>) {}

  create(email: string, password: string, career: string) {
    const user = this.repo.create({ email, password, career });
    return this.repo.save(user);
  }

  async findOne(id: number) {
    const user = await this.repo.findOne(id);
    if (!user) {
      throw new NotFoundException('User with given ID does not exist');
    }
    return user;
  }

  async find(career: string) {
    const usersCareers = await this.repo.find({ career });
    if (usersCareers.length === 0) {
      throw new NotFoundException('no users with that email found');
    }
    return usersCareers;
  }

  async update(id: number, props: Partial<User>) {
    const user = await this.repo.findOne(id);
    if (!user) {
      throw new NotFoundException('user does not exist');
    }
    Object.assign(user, props);
    return this.repo.save(user);
  }

  async remove(id: number) {
    const user = await this.repo.findOne(id);
    if (!user) {
      throw new NotFoundException('user does not exist');
    }

    return this.repo.remove(user);
  }
}
