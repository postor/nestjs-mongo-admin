import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type UserSchema = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({ type: Types.ObjectId, _id: true, default: () => new Types.ObjectId()})
  _id?: string

  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true })
  email: string;

}

export const UserSchema = SchemaFactory.createForClass(User);