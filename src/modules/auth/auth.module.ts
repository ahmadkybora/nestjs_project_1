import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module';
import { LocalStrategy } from './local.strategy';

@Module({
    imports: [
        PassportModule,
        UsersModule,
    ],
    providers: [
        AuthService,
        LocalStrategy,
    ],
    controllers: [AuthController],
})
export class AuthModule {}
