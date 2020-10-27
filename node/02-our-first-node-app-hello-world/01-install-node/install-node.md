---
id: install-node
title: Install Node.js
permalink: node/our-first-node-app-hello-world/install-node
prerequisites: node/our-first-node-app-hello-world/nvm
---

Install Node.js from [here](https://nodejs.org/)

Go to <https://nodejs.org/en/>.  
Download the installation file by clicking one of the green big button that are marked as LTS, or current.  
Which one should you choose?  
LTS stands for Long-Term Support and it means that version will not have any major changes it will only have bug fixes, security fixes, patches and such, no major new features.  
The latest version has the latest features but it can undergo significant changes.
Based on that you can decide which one to choose, bare in mind that the current is usually the preferred choice.

After downloading the file, click it and follow the installation process.  
Mac users can also install via [Homebrew](https://brew.sh/) by opening a terminal and typing:  

```bash
brew install node
```

## Verify Installation

To verify that the installation was successful, if you are a Windows user, open the `CMD` by clicking the Start button and typing 'CMD'.  
If you are a Mac user, open the `terminal` by activating spotlight and search 'terminal'.  
In the terminal or cmd type the following to verify that node is installed and check the version that you installed:

```bash
node -v
```

If the installation was a success you should see the version of node that is currently installed and it should match the version you downloaded.

## Pro Tip: Use NVM

When working on a `Node` project with a team of developers, it is recommended that all the developers will work with the same `Node.js` version.
It is often the case where you will have many projects and many `node` versions for each project.
You can use [nvm](https://academeez.com/node/our-first-node-app-hello-world/nvm) to manage different node versions.
