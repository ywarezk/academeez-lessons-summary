/**
 * Our first Node,js app hello world
 * 
 * Created April 12th, 2020
 * @author: ywarezk
 * @version: 1.0.0
 * @copyright: Nerdeez LTD
 */

import React from 'react';
import LessonLink from '../../../../LessonLink';

export default function HelloWorld() {
    return (
        <article>
            <h1>
                Our first Node.js app - Hello World
            </h1>

            <p>
                Now that we installed Node.js, we can start writing our Javascript apps and run them with Node.js.
                Our goal now is to write a JS script and run that script with Node.js, which will launch a Node process that will run our script.
                We will use an IDE to write our code.
            </p>

            <h2>
                IDE
            </h2>

            <p>
                An IDE is basically a text editor for coders which contains in addition to the text editor, debugging tools and coding tools like auto complete and more.
                Throughout this course the IDE I will use is a free one called <LessonLink href="https://code.visualstudio.com/">Visual Studio Code</LessonLink>.
                We recommend our students to use the same IDE we use in the course but of course it's not obligatory.
                If you do want to use Visual Studio Code, make sure to download it from this <LessonLink href="https://code.visualstudio.com/">link</LessonLink>, and follow the installation process.
            </p>

            <p>
                Try to follow this video and do this exercise with me.
            </p>

            <h2>
                Hello World
            </h2>

            <p>
                Create an empty folder where we will place our project and open that folder using Visual Studio Code.
                Create a new file called: <code>hello.js</code> and in that file place the following code:
            </p>

            <pre>
                <code>
                    console.log('Hello World');
                </code>
            </pre>

            <p>
                <code>console</code> is a global object that represents the <code>stdout</code>, and <code>console.log</code> is a function that will print to the <code>stdout</code>.
            </p>

            <h2>
                Running our app
            </h2>

            <p>
                There are two ways you can run your code: With visual studio code, with terminal/cmd.    
            </p>

            <h3>
                Run with Visual Studio Code
            </h3>

            <p>
                Visual Studio Code has a bar on the left with 5 icons.
                the fourth icon from the top is a play with a bug sign, this is the tab where you can run your code using the IDE debugger.
                Running with the debugger will not only run your code but also allow you to place breakpoints by clicking next to the number of the line of code you want to inspect (you will see a red dot when you place a breakpoint).
                When switching to the debug tab you will see a button you can press to run your code (since we only have one file the IDE will know to run that file, if you have more than one you will have to point the IDE to run a specific one, we will go over that later on)
                Click that button and run you code and see if hello world prints, try to also play with the breakpoint and debugging tools.
            </p>

            <h3>
                Run with Terminal/CMD
            </h3>

            <p>
                Open the terminal or CMD if you are on windows,
                cd to the directory of your project, and run:
            </p>

            <pre>
                <code>
                    > node hello.js
                </code>
            </pre>

            <p>
                <code>node</code> opens a node process and the second argument point to the file to run with that process.
            </p>

            <p>
                You can also download the assignment solution from the download section.
                This will download a zip file with the code and instructions how to run the code inside <code>README.md</code>
            </p>
        </article>
    )
}