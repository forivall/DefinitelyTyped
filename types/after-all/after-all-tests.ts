import afterAll = require('after-all');

const next = afterAll((err) => {
    'Yay! Everything is  done';
});

// The above inner function will only be called when all of these asynchronous calls are done

const someAsynchronousCall1 = (...args: any[]) => {};
const someAsynchronousCall2 = (...args: any[]) => {};

someAsynchronousCall1({foo: 'bar'}, next());
someAsynchronousCall2({val: 2}, next((err: any, res: any) => {
    // If you want to do something with the returned value, you can pass a function
    if (err) return;
    `This was returned: ${res}`;
}));
