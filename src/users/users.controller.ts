import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { SignUpDto } from './dto/signUp.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post('/signup')
  signUp(@Body() signUpDto: SignUpDto): Promise<{ token: string }> {
    return this.usersService.signUp(signUpDto);
  }

  @Get('/login')
  login(
    @Query('username') username: string,
    @Query('password') password: string,
  ): Promise<{ token: string }> {
    return this.usersService.login(username, password);
  }
}
