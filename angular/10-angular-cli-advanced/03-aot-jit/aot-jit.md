---
slug: aot-jit
title: Compiling your App - JIT/AOT
permalink: angular/angular-cli-advanced/aot-jit
---

For the browser to understand and run your angular, you will have to compile your code to turn it to browser understandable code.

## 2 modes of compilation



## AOT

Notice that in `angular.json` the default in the `build` section is `aot` true.

up until version 8 the default in `ng serve` was `aot: false`.

## AOT / JIT

Our components needs to be compiled to run in the browser.
We have JIT compilation which is hardly used  
AOT compilation which compiles the code before running in the browser.  
Before Angular 9 `ng serve` ran with JIT because AOT was too slow for development.  
Angular improved compilation speed with the new `Ivy Renderer` so development can be with `AOT` as well.  
Which means no surprising production error and better template error checking 

## Advantages of AOT
