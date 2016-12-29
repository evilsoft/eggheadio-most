## 0x00 Create Streams From Single Values With `Most.js`
Most provides many means for creating streams, the simplest of which is the `of`
function and it's alias `just`. In this lesson, we demonstrate the use of `of` to lift a single value
into a stream. We also show off the `just` alias of `of`, as well as, a common method for currying a function.

The lesson on egghead can be found [here][6]

### Requirements
This code example runs on a POSIX based system (Linux, OSX, etc) in a [nodejs][3] environment requiring a version greater than `4.2.x` to be run. If you *have* to work in another environment, this lesson also has a "plunk" hosted on [Plunker][4] that can be run in browser and can be found here:

[Lesson Plunk][5]

### Using This Example
This code example and environment is provided on its own branch. To run this locally, just clone this repository down, check out this branch and run the following commands:

#### Setup Your Dependencies
To setup the lesson, execute this command in the project folder:

```
$ npm run setup
```

#### Run The Code
Once all dependencies have been pulled down, you can then run the example code.

This code runs in a node environment and logs to the console that the code was run in. Once started, the environment will listen to changes to the files and re-run the code. This allows you to have immediate feed back to the changes you made. To exit out of the code example, just press the keystroke `Ctrl+C`.

To run the lesson, execute the following in the project folder:


```
$ npm start
```

[1]: https://egghead.io/instructors/ian-hofmann-hicks
[2]: https://github.com/cujojs/most
[3]: https://nodejs.org/
[4]: https://plnkr.co/
[5]: https://embed.plnkr.co/YpYvHI2vbHofm9wrfORU/?show=JS
[6]: https://egghead.io/lessons/javascript-create-streams-from-single-values-with-most-js
