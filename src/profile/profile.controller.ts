import { Controller, Get, Logger } from '@nestjs/common';
import { ProfileService } from './profile.service';

@Controller('api/profile')
export class ProfileController {
	private logger = new Logger('ProfileController');

	constructor(private profileService : ProfileService) {}

	/**
	 *  @route GET api/profile
	 *  @desc Get all profiles
	 *  @access Public
	 */

	/**
	 *  @route GET api/profile/user/:user_id
	 *  @desc Get profile by user ID
	 *  @access Public
	 */

	/**
	 *  @route GET api/profile/github/:username
	 *  @desc Get user repos from github
	 *  @access Public
	 */

	/**
	 *  @route GET api/profile/me
	 *  @desc Get current users profile
	 *  @access Private
	 */

	/**
	 *  @route POST api/profile
	 *  @desc Create or update user profile
	 *  @access Private
	 */

	/**
	 *  @route PUT api/profile/experience
	 *  @desc Add profile experience
	 *  @access Private
	 */

	/**
	 *  @route PUT api/profile/education
	 *  @desc Add profile education
	 *  @access Private
	 */
}
