## Most JS Lesson Code From `egghead.io`

This is the main repository that houses all the code examples from the lessons I have done on [egghead.io][1] around [mostjs][2]. Every lesson has its own branch that includes all the source code from the lesson, usually including additional bits to further expand on the topic at hand.

### Included Lessons

| Title | Egghead Lesson | Plunker | Branch |
|-------|----------------|---------|--------|
| Create Streams From Single Values | [video lesson][5] | [plunk][6] | [github][7] |
| Create Streams From Iterables | [video lesson][8] | [plunk][9] | [github][10] |

### Requirements
These code examples run on a POSIX based system (Linux, OSX, etc) in a [nodejs][3] environment requiring a version greater than `4.2.x` to be run. If you *have* to work in another environment, each lesson also has a "plunk" hosted on [Plunker][4] that can be run in browser.

### Using These Examples
All code examples and environments are provided on there own branch, named after the lesson it goes with. After pull this repository down, just checkout the branch you are interested in and run the following commands:

#### Setup Your Dependencies
Different lessons may require different environments and dependencies. Some lessons are just run in node, while others run in the browser with a "poor man's build system". These lessons include an npm script to manage the dependencies for the specific lesson. To setup the lesson, execute this command in the lessons folder:

```
$ npm run setup
```

#### Run The Examples
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

[5]: https://egghead.io/lessons/javascript-create-streams-from-single-values-with-most-js
[6]: https://embed.plnkr.co/YpYvHI2vbHofm9wrfORU/?show=JS
[7]: https://github.com/evilsoft/eggheadio-most/tree/0x00-create-single-value-streams

[8]: https://egghead.io/lessons/javascript-create-streams-from-iterables-with-most-js
[9]: https://embed.plnkr.co/M1fDtVQIqcBisPNVFN6Q/?show=JS
[10]: https://github.com/evilsoft/eggheadio-most/tree/0x01-create-iterable-streams
