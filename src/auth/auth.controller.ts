import { Controller, Logger } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('api/auth')
export class AuthController {
	private logger = new Logger('AuthController');

	constructor(private authService: AuthService) {}

	/*
	 *  @route GET api/auth
	 *  @desc Test Route
	 *  @access Public
	 */

	/**
	 *  @route Post api/auth
	 *  @desc Authenticate user & get token(로그인)
	 *  @access Public
 	 */

}
