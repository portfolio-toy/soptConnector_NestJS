import { IsNotEmpty } from 'class-validator';

export class ExperienceDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  company: string;

	location: string;
	
	@IsNotEmpty()
	from: Date;

	to: Date;

	@IsNotEmpty()
	current: Boolean

	description: string;

}