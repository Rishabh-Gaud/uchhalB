import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    // const { first_name, email, password } = createUserDto;
    const newUser = new this.userModel(createUserDto);
    return newUser.save();
  }

  async createUser(email: string, password: string): Promise<User> {
    try {
      const existingUser = await this.userModel.findOne({ email });
      if (existingUser) {
        throw new Error('Email already exists.');
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      const user = new this.userModel({
        email,
        password: hashedPassword,
      });
      console.log('user >>>>>>>>>>>>>> ', user);
      await user.save();
      return user;
    } catch (error) {
      console.log('error from user service >>>>>>>', error);
      throw error;
    }
  }

  async findUserByEmail(email: string): Promise<User | null> {
    return this.userModel.findOne({ email });
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
