import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type PostSchema = HydratedDocument<Post>;

@Schema()
export class Post {
  @Prop({ type: Types.ObjectId, _id: true, default: () => new Types.ObjectId()})
  _id?: string

  @Prop({ required: true })
  user: string;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  content: string;

}

export const PostSchema = SchemaFactory.createForClass(Post);