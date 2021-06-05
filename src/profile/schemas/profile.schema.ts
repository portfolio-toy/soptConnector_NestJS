import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { User } from 'src/user/schemas/user.schema';
import { ExperienceDto } from '../dto/experience.dto';
import { EducationeDto } from '../dto/education.dto';
import { SocialDto } from '../dto/social.dto';

export type ProfileDocument = Profile & Document;

@Schema()
export class Profile {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user: User;

  @Prop({ required : true})
  company: string;

  @Prop()
  website: string;

  @Prop({ 
		required : true,
		unique : true
	})
  location: string;

  @Prop()
  status: string;

  @Prop([String])
  skills: string[];

  @Prop()
  bio: string;

  @Prop()
  githubusername: string;

  @Prop([ExperienceDto])
  experience: ExperienceDto[];

  @Prop([EducationeDto])
  education: EducationeDto[];

  @Prop([SocialDto])
  social: SocialDto[];

	@Prop({ default: Date.now })
	date: Date;
}

export const ProfileSchema = SchemaFactory.createForClass(Profile);