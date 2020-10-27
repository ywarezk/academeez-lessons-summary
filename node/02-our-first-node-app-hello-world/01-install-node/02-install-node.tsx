/**
 * installing node lesson
 * 
 * Created April 12th, 2020
 * @author: ywarezk
 * @version: 1.0.0
 * @copyright: Nerdeez Ltd
 */

import React from 'react';
import LessonLink from '../../../LessonLink';

export default function InstallNode() {
    return (
        <article>
            <h1>
                Installing Node.js
            </h1>

            <p>
                Go to <LessonLink href="https://nodejs.org/en/" >Node.js homepage</LessonLink>.
                Download the installation file by clicking one of the green big button that are marked as LTS, or current.
                Which one should you choose?
                LTS stands for Long-Term Support and it means that version will not have any major changes it will only have bug fixes, security fixes, patches and such, no major new features.
                The latest version has the latest features but it can undergo significant changes.
                Based on that you can decide which one to choose, bare in mind that the current is usually the preferred choice. 
            </p>

            <p>
                After downloading the file, click it and follow the installation process.
                Mac users can also install via <LessonLink href="https://brew.sh/">Homebrew</LessonLink> by opening a terminal and typing:
            </p>

            <pre>
                <code>
                    > brew install node
                </code>
            </pre>

            <h2>
                Verify Installation
            </h2>

            <p>
                To verify that the installation was successful, if you are a Windows user, open the <strong>CMD</strong> by clicking the Start button and typing 'CMD'.
                If you are a Mac user, open the terminal by activating spotlight and search 'terminal'.
                In the terminal or cmd type the following to verify that node is installed and check the version that you installed:
            </p>

            <pre>
                <code>
                    > node -v
                </code>
            </pre>

            <p>
                If the installation was a success you should see the version of node that is currently installed and it should match the version you downloaded.
            </p>
        </article>
    )
}