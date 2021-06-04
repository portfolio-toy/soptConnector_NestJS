import { Controller, Get } from '@nestjs/common';
import { ProfileService } from './profile.service';

@Controller('api/profile')
export class ProfileController {
	constructor(private profileService : ProfileService) {}

		@Get()
		getAllProfiles() {
			return this.profileService.getAllProfiles();
		}
}
