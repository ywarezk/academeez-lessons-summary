---
slug: building-app
title: Building your app
permalink: angular/angular-cli-advanced/building-app
---

Building your app will create the static files of your app.  
Those static files when uploaded to a server will make your app available online.  

## Build command

```bash
npx ng build hello-world
```

```bash
npx ng build hello-world --prod
```

## Check the bundle size

```
npx ng build hello-world --prod --stats-json
npm install webpack-bundle-analyzer -D
npx webpack-bundle-analyzer dist/hello-world/stats.json
```

## Bundle size improvment with Ivy Renderer




