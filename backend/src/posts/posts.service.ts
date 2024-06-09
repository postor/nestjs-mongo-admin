import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Post } from '../schemas/post.schema';
import { CreatePostDto } from 'src/dtos/CreatePostDto';

@Injectable()
export class PostsService {
  constructor(@InjectModel(Post.name) private postModel: Model<Post>) { }

  async create(createPostDto: CreatePostDto): Promise<Post> {
    const createdPost = new this.postModel(createPostDto);
    return createdPost.save();
  }

  async findAll(page: number, perPage: number): Promise<Post[]> {
    const skip = (page - 1) * perPage;
    return this.postModel.find().skip(skip).limit(perPage).exec();
  }

  async count(): Promise<number> {
    return this.postModel.countDocuments().exec();
  }

  async findOne(id: string): Promise<Post> {
    console.log(id, await this.postModel.findById(new Types.ObjectId(id)).exec())
    return this.postModel.findById(new Types.ObjectId(id)).exec();
  }

  async update(id: string, updatePostDto: any): Promise<Post> {
    return this.postModel.findByIdAndUpdate(new Types.ObjectId(id), {
      ...updatePostDto,
      _id: undefined,
    }, { new: true }).exec();
  }

  async remove(id: string): Promise<Post> {
    return this.postModel.findByIdAndDelete(new Types.ObjectId(id)).exec();
  }
}
