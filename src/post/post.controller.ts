import { Controller, Logger } from '@nestjs/common';
import { PostService } from './post.service';

@Controller('api/post')
export class PostController {
	private logger = new Logger('PostController');

	constructor(private postService: PostService) {}

	/**
	 *  @route POST api/posts
	 *  @desc Create a post
 	 *  @access Private
	 */

	/**
	 *  @route GET api/posts
	 *  @desc Get all posts
	 *  @access Private
	 */

	/**
	 *  @route GET api/posts/:id
	 *  @desc Get post by ID
	 *  @access Private
	 */

	/**
	 *  @route DELETE api/posts/:id
	 *  @desc Delete a post
	 *  @access Private
	 */

	/**
	 *  @route PUT api/posts/like/:id
	 *  @desc Like a post
	 *  @access Private
	 */

	/**
	 *  @route PUT api/posts/unlike/:id
	 *  @desc Unlike a post
	 *  @access Private
	 */

	/**
	 *  @route POST api/posts/comment/:id
	 *  @desc Comment a post
	 *  @access Private
	 */

	/**
	 *  @route DELETE api/posts/comment/:id/:comment_id
	 *  @desc Delete comment
	 *  @access Private
	 */
}
