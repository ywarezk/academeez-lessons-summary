---
id: hello-world
title: Our first Node.js app - Hello World
permalink: node/our-first-node-app-hello-world/hello-world
code: https://repl.it/@academeez/hello-world
prerequisites: visual-studio-code
---

In this lesson we will create a simple app that prints `Hello World` to the screen.

Now that we installed Node.js, we can start writing our Javascript apps and run them with Node.js.  
Our goal now is to write a JS script and run that script with Node.js, which will launch a Node process that will run our script.  
We will use an IDE to write our code.

## IDE - Visual Studio Code

An IDE is basically a text editor for coders which contains in addition to the text editor, debugging tools and coding tools like auto complete and more.  
Throughout this course the IDE I will use is a free one called [Visual Studio Code](https://code.visualstudio.com/).     
You can learn more about `Visual Studio Code` in [here](https://academeez.com/visual-studio-code)

## Hello World

Create an empty folder where we will place our project and open that folder using `Visual Studio Code`.  
Create a new file called: `hello.js` and in that file place the following code:

```js
console.log('Hello World');
```

`console` is a global object that represents the `stdout`, and `console.log` is a function that will print to the `stdout`.

## Running our app

There are two ways you can run your code: With visual studio code, with terminal/cmd.    

### Run with Visual Studio Code

Visual Studio Code has a bar on the left with 5 icons.  
the fourth icon from the top is a play with a bug sign, this is the tab where you can run your code using the IDE debugger.  
Running with the debugger will not only run your code but also allow you to place breakpoints by clicking next to the number of the line of code you want to inspect (you will see a red dot when you place a breakpoint).  
When switching to the debug tab you will see a button you can press to run your code (since we only have one file the IDE will know to run that file, if you have more than one you will have to point the IDE to run a specific one, we will go over that later on)  
Click that button and run you code and see if hello world prints, try to also play with the breakpoint and debugging tools.

### Run with Terminal/CMD

Open the terminal or CMD if you are on windows, cd to the directory of your project, and run:  

```bash
node hello.js
```

`Node` opens a node process and the second argument point to the file to run with that process.

You can view the code for this exercise [here](https://repl.it/@academeez/hello-world)
