import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model, Types } from 'mongoose';
import { User } from '../schemas/user.schema';
import { CreateUserDto } from 'src/dtos/CreateUserDto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) { }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = new this.userModel(createUserDto);
    return createdUser.save();
  }

  async findAll(page: number, perPage: number): Promise<User[]> {
    const skip = (page - 1) * perPage;
    return this.userModel.find().skip(skip).limit(perPage).exec();
  }

  async count(): Promise<number> {
    return this.userModel.countDocuments().exec();
  }

  async findOne(id: string): Promise<User> {
    console.log(id, await this.userModel.findById(new Types.ObjectId(id)).exec())
    return this.userModel.findById(new Types.ObjectId(id)).exec();
  }

  async update(id: string, updateUserDto: any): Promise<User> {
    return this.userModel.findByIdAndUpdate(new Types.ObjectId(id), {
      ...updateUserDto,
      _id: undefined,
    }, { new: true }).exec();
  }

  async remove(id: string): Promise<User> {
    return this.userModel.findByIdAndDelete(new Types.ObjectId(id)).exec();
  }

  async findByIds(ids: number[]): Promise<User[]> {
    const objectIds = ids.map(id => new Types.ObjectId(id));

    // Efficient MongoDB Query
    const filterQuery: FilterQuery<User> = { _id: { $in: objectIds } };

    return this.userModel.find(filterQuery).exec();
  }
}
