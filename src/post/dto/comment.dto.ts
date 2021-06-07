import { IsNotEmpty } from 'class-validator';
import mongoose from "mongoose";

export class CommentDto {
  @IsNotEmpty()
	user: mongoose.Types.ObjectId;

	text: string;

	name: string;

	avatar: string;

	date: Date;
}