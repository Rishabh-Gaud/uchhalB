import { Injectable } from '@nestjs/common';
import { runTestCases } from 'src/util/helper';
@Injectable()
export class CompilerService {

  async executeCode(cppCode: string, problemId: string, testCases:any) {
    try {
      // const testCases = [
      //   { input: '3\n2 3\n-1 5\n0 0\n', expectedOutput: '5\n4\n0' },
      // ];
      console.log(testCases);
      
      const data = await runTestCases(testCases, cppCode);
      return data;
    } catch (error) {
      throw error;
    }
  }
}
