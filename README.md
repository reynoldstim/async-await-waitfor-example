# Async-Await and WaitFor

This is a demo project illustrating how misuse and misunderstanding of async-await and [Testing Library's](https://testing-library.com/docs/dom-testing-library/api-async/#waitfor) _waitFor_ can lead to flaky tests.

You can read all about it by subscribing to my newsletter [here, at BiodigitalJazz.tech!](https://www.biodigitaljazz.tech/)

This project was initialized using [Vite](https://vitejs.dev/).

## Index

You can check out each of the following branches to follow along with the progression of the application as we discover why our test is flaky, and how to fix it.

1. [The test passes, but the application is broken](https://github.com/reynoldstim/async-await-waitfor-example/tree/001/tests-work-code-broken)
2. [We add some logging statements to trace through our test](https://github.com/reynoldstim/async-await-waitfor-example/tree/002/log-trace)
3. [We add async and await](https://github.com/reynoldstim/async-await-waitfor-example/tree/003/add-async-await-with-logs)
4. [We show that expect is called multiple times and throwing an error](https://github.com/reynoldstim/async-await-waitfor-example/blob/004/catching-assertion-error/src/App.test.tsx)
5. [We fix the errant function, and tests pass for real this time](https://github.com/reynoldstim/async-await-waitfor-example/tree/005/fix-implementation)
   

## Setup

1. Clone this repository to your machine.
2. In your terminal, cd into the root folder.
3. Execute `npm install`.
4. To run the app, execute `npm run dev`, and navigate to `http://localhost:5173/`
5. If you're using VSCode, you can install the [Vitest](https://marketplace.visualstudio.com/items?itemName=vitest.explorer) extension to run and examine the UI tests.
