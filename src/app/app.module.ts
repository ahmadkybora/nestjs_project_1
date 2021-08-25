import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {UsersController} from "../users/users.controller";
import {UsersService} from "../users/users.service";
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from '../database/database.module';

@Module({
    imports: [
        ConfigModule.forRoot({ isGlobal: true }),
        DatabaseModule,
    ],
    controllers: [AppController, UsersController],
    providers: [AppService, UsersService],
})
export class AppModule {
}
