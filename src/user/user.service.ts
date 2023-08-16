import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './entities/user.entity';
import bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    try {
      const { email, password, username, first_name, last_name } =
        createUserDto;
      const existingUser = await this.userModel.findOne({ email });
      if (existingUser) {
        throw new Error('Email already exists.');
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      const user = new this.userModel({
        email,
        password: hashedPassword,
        username,
        first_name,
        last_name,
      });
      await user.save();
      return user;
    } catch (error) {
      console.log('[ERROR] [USER SERVICE : createUser]', error);
      throw error;
    }
  }

  async login(userkey: string, password: string): Promise<User | null> {
    try {
      const existingUser =
        (await this.userModel.findOne({ email: userkey })) ||
        (await this.userModel.findOne({ username: userkey }));
      if (!existingUser) {
        throw new Error('user is not found');
      }
      const passwordMatch = await bcrypt.compare(
        password,
        existingUser['password'],
      );
      if (!passwordMatch) {
        throw new Error('password is not matched');
      }
      return existingUser;
    } catch (error) {
      console.log('[ERROR] [USER SERVICE : login]', error);
      throw error;
    }
  }

  async findAll(): Promise<User[]> {
    try {
      const data = await this.userModel.find().exec();
      return data;
    } catch (error) {
      console.log('[ERROR] [USER SERVICE : findAll', error);
      throw error;
    }
  }

  async findOne(userkey: string) {
    try {
      const existingUser =
        (await this.userModel.findOne({ email: userkey })) ||
        this.userModel.findOne({ username: userkey });
      return existingUser;
    } catch (error) {
      console.log('[ERROR] [USER SERVICE : findOne]', error);
      throw error;
    }
  }
}
