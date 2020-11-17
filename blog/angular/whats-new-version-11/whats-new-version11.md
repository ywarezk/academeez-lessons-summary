---
slug: what-new-version-11
title: What's new in Angular version 11
permalink: blog/angular/what-new-version-11
---

In this article we will cover the new additions that are added in Angular V11.

## Inlining fonts

Open the `index.html` and add a font from google fonts.  
Build your app:

```
npx ng build --prod
```

open the distribution files the `index.html` and you will notice that angular examined the font and inlined it for faster initial speed.

## Component Test harness

## Better logging

## Angular Language Service

Angular Language Service allows for better code editing and error reporting in templates.

## Hot Module Replacement

The change will not refresh the page.  
To enable:

```bash
npx ng serve --hmr
```

Now if you create another component and nest it under the parent component.  
Now add an input in the parent and make changes in the child, the input reserve the value.  

