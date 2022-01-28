const testProcessArgv = () => {
  process.argv.forEach((val, index) => {
    console.log(`${index}: ${JSON.stringify(val)}`);
  });
  // const args = require("minimist")(process.argv.slice(2));
  // console.log(args["name"]);
  //  node /Users/ych/Documents/private/personal-learning/demo/nodejs-demo/test.js --name=joe
};

const testConsoleTrace = () => {
  console.trace();
};

const doSomething = () => console.log('测试')
const measureDoingSomething = () => {
  console.time('doSomething()')
  //做点事，并测量所需的时间。
  doSomething()
  console.timeEnd('doSomething()')
}

measureDoingSomething()
// testProcessArgv();
// testConsoleTrace();
