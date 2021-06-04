import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProfileController } from './profile/profile.controller';
import { ProfileModule } from './profile/profile.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';

@Module({
  imports: [
    ProfileModule,
    MongooseModule.forRoot('MONGODB_URL'),
    AuthModule,
    UserModule,
    PostModule,
  ],
  controllers: [ProfileController],
})
export class AppModule {}
