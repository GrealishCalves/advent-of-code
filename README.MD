# Running Specific Test Files

To run a specific test file in your project using Jest, follow the steps below:

1. Open a terminal or command prompt.
2. Navigate to the project's root directory.
3. Execute the following command, replacing `<test-file-path>` with the actual path to the test file:

```bash
npm run test-file <test-file-path>
```

Make sure to replace `<test-file-path>` with the correct path to your test file. For example, if your test file is located at `test/a.spec.ts`, the command would be:

```bash
npm run test-file test/a.spec.ts
```

Jest will then execute the specified test file and display the test results in the terminal.

By running specific test files, you can focus on testing specific parts of your project and ensure the desired functionality is working correctly.
