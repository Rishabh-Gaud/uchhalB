import { Controller, Post, Get, Body, Param, Patch } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto, LoginDTO } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  async create(@Body() createUserDto: CreateUserDto) {
    try {
      const createUser = await this.userService.createUser(createUserDto);
      return { statusCode: 201, isSuccess: true, data: createUser };
    } catch (error) {
      console.log('[SERVER ERROR][UserController:createUser]: ', error);
      return { statusCode: 500, isSuccess: false, error: error };
    }
  }

  @Get('login')
  async login(@Body() loginDTO: LoginDTO) {
    try {
      const { userkey, password } = loginDTO;
      const data = await this.userService.login(userkey, password);
      return { statusCode: 200, isSuccess: true, data };
    } catch (error) {
      console.log('[ERROR] [USER CONTROLLER : LOGIN]', error);
      return { statusCode: 500, isSuccess: false, error };
    }
  }

  @Get()
  async findAll() {
    try {
      const userData = await this.userService.findAll();
      return { statusCode: 200, isSuccess: true, data: userData };
    } catch (error) {
      console.log('[ERROR] [USER CONTROLLER : FINDALL]', error);
      return { statusCode: 500, isSuccess: false, error };
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      const data = await this.userService.findOne(id);
      return { statusCode: 200, isSuccess: true, data };
    } catch (error) {
      console.log('[ERROR] [USER CONTROLLER : findOne]', error);
      return { statusCode: 500, isSuccess: false, error };
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    try {
      const data = await this.userService.update(id, updateUserDto);
      return { statusCode: 200, isSuccess: true, data };
    } catch (error) {
      console.log('[SERVER ERROR][UserController:update]: ', error);
      return { statusCode: 500, isSuccess: false, error };
    }
  }
}
