import { Module } from '@nestjs/common';
import { ProfileController } from './profile/profile.controller';
import { ProfileModule } from './profile/profile.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';

@Module({
  imports: [
    ProfileModule,
    AuthModule,
    UserModule,
    PostModule,
  ],
  controllers: [ProfileController],
})
export class AppModule {}
