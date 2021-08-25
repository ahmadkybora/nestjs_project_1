import { IsNotEmpty, MinLength } from 'class-validator';

export class PostDto {
    readonly userId: string;
    @IsNotEmpty()
    @MinLength(4)
    readonly title: string;

    @IsNotEmpty()
    readonly body: string;
}
