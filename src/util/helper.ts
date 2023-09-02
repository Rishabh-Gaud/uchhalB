import compileRun from "compile-run";

export async function runTestCases(testCases, cppCode: string) {
    let resultList = [];
    let count = 0;
    for (const testCase of testCases) {
        const { input, expectedOutput } = testCase
        let actualCheckedOutput = '';
        let ExpectedCheckedOutput = '';
        const result = await compileRun.cpp.runSource(cppCode, {
            stdin: input,
            compileTimeout: 5000,
        });

        function removeNewlinesAndCarriageReturns(str) {
            return str.replace(/[\n\r]/g, '');
        }
        const actualOutput = result.stdout;
        actualCheckedOutput = await removeNewlinesAndCarriageReturns(actualOutput);
        ExpectedCheckedOutput = await
            removeNewlinesAndCarriageReturns(expectedOutput);
        if (actualCheckedOutput == ExpectedCheckedOutput) {
            let temp = { isAccept: true, data: `Test case passed: ${actualOutput}` };
            resultList.push(temp);
            count = count + 1;
        } else {
            let temp = { isAccept: false, data: { expectedOutput, actualOutput } };
            resultList.push(temp);
        }
    }
    return {resultList,count};
}
