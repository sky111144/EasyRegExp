const chai = require("chai");
const EasyRegExp = require("../../dist/easyregexp");

const { expect } = chai;

describe("isEmail：case: hash", function () {
    [
        { content: "helloworld#gmail.com", result: false },
        { content: "helloworld#gmail#com", result: false },
        { content: "helloworld#gmail.com", result: false },
        { content: "hello#world@gmail.com", result: false }
    ].forEach((item, index) => {
        it(`EasyRegExp.isEmail("${item.content}") should be ${item.result}`, function () {
            expect(EasyRegExp.isEmail(item.content)).to.equal(item.result);
        });
    });
});

describe("isEmail：case: space", function () {
    [
        { content: "helloworld gmail.com", result: false },
        { content: "helloworld gmail@com", result: false },
        { content: "helloworld@", result: false },
        { content: "helloworld@gmail com", result: false },
        { content: "helloworld gmail com", result: false },
        { content: "hello world@gmail.com", result: false }
    ].forEach((item, index) => {
        it(`EasyRegExp.isEmail("${item.content}") should be ${item.result}`, function () {
            expect(EasyRegExp.isEmail(item.content)).to.equal(item.result);
        });
    });
});

describe("isEmail：case: dot", function () {
    [
        { content: "hello.world.@gmail.com", result: false },
        { content: ".hello.world@gmail.com", result: false },
        { content: ".helloworld.@gmail.com", result: false },
        { content: ".hello.world.@gmail.com", result: false },
        { content: "hello.66666@gmail.com", result: true },
        { content: "66666.world@gmail.com", result: true },
        { content: "hello.world@gmail.com", result: true },
        { content: "hello.66.world@gmail.com", result: true },
        { content: "hello.hi.world@gmail.com", result: true }
    ].forEach((item, index) => {
        it(`EasyRegExp.isEmail("${item.content}") should be ${item.result}`, function () {
            expect(EasyRegExp.isEmail(item.content)).to.equal(item.result);
        });
    });
});

describe("isEmail：case: hyphen", function () {
    [
        { content: "hello-world-@gmail.com", result: false },
        { content: "-hello-world@gmail.com", result: false },
        { content: "-helloworld-@gmail.com", result: false },
        { content: "-hello-world-@gmail.com", result: false },
        { content: "hello-world@gmail.com", result: true },
        { content: "hello-666666@gmail.com", result: true },
        { content: "666666-world@gmail.com", result: true },
        { content: "hello-hi-world@gmail.com", result: true },
        { content: "hello-hi-world@-google-inc.com", result: false },
        { content: "hello-hi-world@google-inc-.com", result: false },
        { content: "hello-hi-world@-google-inc-.com", result: false },
        { content: "hello-hi-world@google-inc.com", result: true }
    ].forEach((item, index) => {
        it(`EasyRegExp.isEmail("${item.content}") should be ${item.result}`, function () {
            expect(EasyRegExp.isEmail(item.content)).to.equal(item.result);
        });
    });
});


describe("isEmail：underline", function () {
    [
        { content: "hello_world_@gmail.com", result: false },
        { content: "_hello_world@gmail.com", result: false },
        { content: "_helloworld_@gmail.com", result: false },
        { content: "_hello_world_@gmail.com", result: false },
        { content: "hello_world@gmail.com", result: true },
        { content: "hello_666666@gmail.com", result: true },
        { content: "666666_world@gmail.com", result: true },
        { content: "666666_666666@gmail.com", result: true }
    ].forEach((item, index) => {
        it(`EasyRegExp.isEmail("${item.content}") should be ${item.result}`, function () {
            expect(EasyRegExp.isEmail(item.content)).to.equal(item.result);
        });
    });
});

describe("isEmail：normal", function () {
    [
        { content: "6666666666666@gmail.com", result: true },
        { content: "helloworld@gmail.com", result: true },
        { content: "hello666666world@gmail.com", result: true },
        { content: "666666helloworld@gmail.com", result: true },
        { content: "helloworld666666@gmail.com", result: true },
    ].forEach((item, index) => {
        it(`EasyRegExp.isEmail("${item.content}") should be ${item.result}`, function () {
            expect(EasyRegExp.isEmail(item.content)).to.equal(item.result);
        });
    });

});
