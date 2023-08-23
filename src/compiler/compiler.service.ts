import { Injectable } from '@nestjs/common';
import { runTestCases } from 'src/util/helper';
@Injectable()
export class CompilerService {

  async executeCode(cppCode: string, problemId: string, testCases:any) {
    try {
      const data = await runTestCases(testCases, cppCode);
      return data;
    } catch (error) {
      throw error;
    }
  }
}
