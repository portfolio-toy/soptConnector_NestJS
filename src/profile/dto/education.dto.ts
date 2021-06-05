import { IsNotEmpty } from 'class-validator';

export class EducationeDto {
  @IsNotEmpty()
  school: string;

  @IsNotEmpty()
  degree: string;

	fieldofstudy: string;
	
	@IsNotEmpty()
	from: Date;

	to: Date;
	
	@IsNotEmpty()
	current: Boolean

	description: string;

}