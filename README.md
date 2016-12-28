## 0x00 Create Streams From Single Values With `Most.js`
Most provides many means for creating streams, the simplest of which is the `of`
function and it's alias `just`. In this lesson, we demonstrate the use of `of` to lift a single value
into a stream. We also show off the `just` alias of `of` as well as a common method for currying a function.

### Requirements
These code examples run on a POSIX based system (Linux, OSX, etc) in a [nodejs][3] environment requiring a version greater than `4.2.x` to be run. If you *have* to work in another environment, each lesson also has a "plunk" hosted on [Plunker][4] that can be run in browser.

### Using these examples
All code examples and environments are provided on there own branch, named after the lesson it goes with. After pull this repository down, just checkout the branch you are interested in and run the following commands:

#### Setup your dependencies
Different lessons may require different environments and dependencies. Some lessons are just run in node, while others run in the browser with a "poor man's build system". These lessons include an npm script to manage the dependencies for the specific lesson. To setup the lesson, execute this command in the lessons folder:

```
$ npm run setup
```

#### Run the examples
Once all dependencies have been pulled down, you can then run the examples with another npm script. How the results are viewed varies from lesson to lesson, so check each lesson's `README.md` to see how the results are viewed.

When running the examples, they will continue to run, listening to changes in your files. Once one of the files change, it will re-run/recompile script. When you are done playing with the code, you can quit the example with `ctrl+c` to get back to your prompt.

You can run the examples by calling the following:

```
$ npm start
```

[1]: https://egghead.io/instructors/ian-hofmann-hicks
[2]: https://github.com/cujojs/most
[3]: https://nodejs.org/
[4]: https://plnkr.co/
