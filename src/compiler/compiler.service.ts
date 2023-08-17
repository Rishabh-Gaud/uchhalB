import { Injectable } from '@nestjs/common';
import { CreateCompilerDto } from './dto/create-compiler.dto';
import { UpdateCompilerDto } from './dto/update-compiler.dto';
import { execSync } from 'child_process';

@Injectable()
export class CompilerService {
  create(createCompilerDto: CreateCompilerDto) {
    const pythonCode = `
print("Hello from Python!")
x = 5
y = 10
result = x + y
print("Result:", result)
`;

    try {
      const output = execSync(`python -c "${pythonCode}"`).toString();
      console.log(output);
    } catch (error) {
      console.error(error.message);
    }
  }

  async findAll() {
    const cppCode = `
#include <iostream>
using namespace std;

int main() {
  cout << "Hello from C++!" << endl;
  int x = 5;
  int y = 10;
  int result = x + y;
  cout <<result << endl;
  return 0;
}
`;

    const input = ''; // Input for the C++ program

    try {
      // Compile and run the C++ code in memory
      const command = `echo "${cppCode}" | g++ -xc++ - && ./a.out`;
      const output = await execSync(command, { input });
      console.log(output.toString());
      return output.toString();
    } catch (error) {
      console.error(error.message);
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} compiler`;
  }

  update(id: number, updateCompilerDto: UpdateCompilerDto) {
    return `This action updates a #${id} compiler`;
  }

  remove(id: number) {
    return `This action removes a #${id} compiler`;
  }
}
