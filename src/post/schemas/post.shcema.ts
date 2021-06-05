import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { User } from 'src/user/schemas/user.schema';

export type PostDocument = Post & Document;

@Schema()
export class Post {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user: User;

  @Prop({ required : true})
  text: string;

  @Prop()
  name: string;

  avatar: string;

	@Prop(raw({
		user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
		text: { type: String },
		name: { type: String },
		avatar: { type: String },
		date: { type: Date, default : Date.now}
	}))
	details: Record<string, any>;

	@Prop({ default: Date.now })
	date: Date;
}

export const PostSchema = SchemaFactory.createForClass(Post);