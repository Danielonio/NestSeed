import { Module } from '@nestjs/common';
import { FindUserService } from './application/find.user.service';
import { SignInService } from './application/sign.in.service';
import { SignInController } from './infraestructure/controllers/sign.in.controller';
import { JwtModule } from '@nestjs/jwt'; // Add this import
import { AUTH_JWT_SECRET } from '../shared/infraestructure/constants/constants';
import { GetProfileController } from './infraestructure/controllers/get.profile.controller';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: AUTH_JWT_SECRET,
      signOptions: { expiresIn: '60s' },
      // Secret and signOptions can be set in the environment variables to configure the JWT
    }),
  ],
  providers: [FindUserService, SignInService],
  exports: [FindUserService],
  controllers: [SignInController, GetProfileController],
})
export class UsersModule {}
