---
id: why-react
title: Why choose React
permalink: react/welcome-to-react-course/why-react
additional: react/server-side-rendering,javascript/jquery
---

There are different technologies you can choose for building a website, why should I choose React then?

React can be used to build frontend apps, and I can use React to build a website, just like we are going to do in this course.  
But why should I build my website with React? there are a lot of other technologies that can help me build my website.  
Is React the best weapon to choose?

When building a software, you will often realize that there is more than one "right" way to solve that problem.  
There are plenty of wrong ways to solve it as well, but there is often more than one right way as well.  
`React` is not the only technology you can use to build a website, there are few right choices you can use, and also plenty of bad ones.  
My goal here is not to put `React` on a pedestal, rather state the advantages of using `React`, point you to a few other right technologies, point you how to know a bad technology, and also name some bad technologies for creating a website.    

Let's start by pointing the main advantages of using React.

## Platform Agnostic

As we said before, `React` is Platform agnostic and can be used for building different frontend apps.  
Also we said we will use React to build websites in this course.  
We also mentioned the fact that if we want to build a different frontend app, say we started by building a website, and now we want to build a mobile app for our site, we can use `React` for building our mobile app.  
This means that we don't have to learn everything from scratch, we have the `Core React` knowledge and we only need to learn platform specific environment and rules to start building our mobile app.        

The fact that `React` is Platform agnostic gives us very significant advantages.  
You can quickly develop to different platform, and you will have a quick learning curve when moving from platform to platform.  
There is no need for creating a team for iOS app and a team for Android app, a team for the web and a team for the desktop, each programmer can easily use his knowledge of `React` for creating different frontend apps.  
This fact will save us time and money for creating the organization frontend apps.

In fact, if we look at different surveys, sum all the hours of development in all the software companies in the world, and try to categorize them: that hour was for frontend app, that was for backend, that was for devops and so forth...  
We can see that the majority of development hours in the world are dedicated to frontend apps, rather it's iOS app or website app, or Android app...  
As technology advances, so are the number of frontend platforms. Different software companies now have to take care of creating a web application, smartphone app, smart watch app, smarttv app and so on.  
In addition the user expectations and standards are growing as well, so the user expects a fast, responsive app, with great graphics and user experience.  
Now imagine a software company builds a website with React, now they can take the same website developers and they can quickly develop a mobile app as well, no need to hire android or iOS developers.  
Imagine how much time and money React will save for those companies.

Another important advantage of `React` Platform Agnosticism is that one of the platforms that `React` can run on is on a backend server that's running node.  
This fact can make a server run our `React` app and produce HTML of our `React` app, a concept called `Server Side Rendering` which we will learn in this course further down the road.  
It's an important feature since it will make our app load faster and preform better in search results.  
This means that the fact that `React` is platform agnostic can make our app load even faster!

Platform Agnostic is an important feature that you have to consider when choosing the technology you will use for creating your frontend apps.  
Among the popular Platform Agnostic technologies we have, other than `React`, are [Angular](https://angular.io/) and [Vue](https://vuejs.org/).  
So when choosing a technology for building you frontend app, choose a platform agnostic technology like: `React`, `Angular`, `Vue`.  
Do not use frameworks or libraries that are not platform agnostic like: Angular.js, Ember, Backbone.  
Or at least be aware if you choose them that you are limited in the amount of frontend apps you can build with them, limited as for the initial load speed and the performance in search result.  
Overall, today I will highly not recommend on using a technology that is not Platform Agnostic.  

## Popularity

Here is a sad story for you...  
In 2007 Microsoft released application framework for creating rich websites, was kind of similar to [Adobe Flash](https://en.wikipedia.org/wiki/Adobe_Flash) where you had to install a browser plugin, and that plugin would enable you to run [Silverlight](https://www.microsoft.com/silverlight/) content, which enabled the web developer to create rich content, animations, and interactive site.  
`Silverlight` showed a lot of promise, and was highly adopted especially here in Israel where Microsoft technologies are quite popular.  
After a while, things started to deteriorate... it was starting to be less supported in other browsers, and the adoption rate of the users (meaning those who installed the plugin) started to sink.  
With the rise of HTML5 and mobile phones it was the last nail in the coffin for that technology and the whole framework was deprecated.  
If you built your site with `Silverlight`, after the deprecation you had to rebuild the site almost from scratch.  
If you were a company that choose `Silverlight` the damage you encountered after the deprecation was enormous. 

A few years later pops another interesting technology... [Angular.js](https://angularjs.org/).  
`Angular.js` was released in 2009 and was the first framework for creating web sites of type [Single Page Applications](https://en.wikipedia.org/wiki/Single-page_application), which we will talk about later on.  
That framework showed a lot of promise as well, showed good performance for desktop, but mainly for small apps.   
For large apps the performance was not so good, for the smartphones the performance was bad.  
The initial load of the framework was slow, sites created with angular.js were not rendered properly by search engines and usually did not get good results in search engines.  
Google announced that they will not release new versions of Angular.js and will only release bug fixes, security patches and minor fixes.
My guess, it won't take long for `Angular.js` to be deprecated like `Silverlight`.

The graveyard of technologies is filled with, what seemed at the time, promising technologies.  
`Silverlight, Flash`, probably `Angular.js`, are just some examples of a long list.  
No one can predict what the future will hold, the technology we use today might reach it's end of life tomorrow (or in a year, or in 5 years).  
I'm not saying do not use different technologies, of course you should use libraries like `React, Angular` or `Vue`, I'm just saying bare in mind that there is a risk involved.  
You should research the technology you are choosing to reduce that risk, and here are a few tips for you.

- I highly recommend choosing an Open Source technology.  
If the technology is open source and popular, advancing the technology will be a common interest of many people.  
- Ask yourself if the technology is adopted by many organization, and they contribute to that technology. In that aspect `React`, in my opinion, wins if we look at the other strong competition of `Angular` and `Vue`.  
Companies like: Facebook, Wix, Airbnb, Netflix, adopted `React` as their solution, which can make you breath easily, if they made that choice of `React` and it works for their apps, there is a good chance it's a good solution for you as well.

For open source technology, it's easy to check the technology popularity.  
A good estimate (not exact) of how much popular is a certain technology is by checking: [NPM Trends](https://www.npmtrends.com/).  
With NPM trends you can check the amount of downloads a JS technology got.  
With this check `React` is winning by a long shot.  
Try and go to npm trends and compare between: `React, Angular and Vue`.  
`React` is more adopted than the other competitors.  
Another thing that I check with npm trends, is looking at the graph over a period of time. I want to check not only the popularity but the popularity over time.  
Seeing a positive curve graph, the more steeper the better, means the technology popularity is rising over the years. `React` curve seems the largest.

Popularity reflects also on your market value.  
A software company that is looking for a `React` developer, usually will prefer to hire a programmer with `React` experience.  
Since more companies adopt `React`, you will have a larger chance to get a job, you will have more companies chase after you if you are a good `React` developer.  
The rules of Supply and Demand apply here as well, but bare in mind that the supply will grow as well, cause a lot of young programmers, seeing how popular `React` is, will choose to learn `React`.
Become a good `React` programmer and you will be HOT in the job market.

The fact that `React` is so popular, and open source, means that we have amazing community that builds amazing libraries, that will support and advance our React developments.  
The popular `React` libraries are updated on a daily bases, they are highly tested, and highly used. The community inspects them very thoroughly, report bugs and improve them with each release.  
You also get a great [StackOverflow](https://www.stackoverflow.com) support as `React` being a very popular topic on `StackOverflow`, much more popular than `Angular` and `Vue`, which means when you stumble on problems you have a better chance to find the help you need in `StackOverflow` if you are using `React`. 

Currently `React` is the most popular UI library out there.   
It's much more popular than `Angular` or `Vue`.  
It's open source and adopted by many large organizations.  
The fact that facebook is in charge of this project also can calm you down cause there is a large organization that makes sure the technology advances properly.  
`React` popularity has risen over the years and is even more popular to day than [jQuery](https://acadmeeez.com/javascript/jquery)!  
More popular means your market value in the job industry will rise.

## Speed

In today's age, speed has significant implications on the success of our app.  
According to Google, [53% of mobile site visits were abandoned if a page took longer that 3 second to load](https://developers.google.com/web/fundamentals/performance/why-performance-matters).  
I divide the measurement of speed to two aspects:

- **Initial Load** - how much time does it take our site to load
- **User Experience speed** - how fast does our app respond to user actions. This aspect will be strongly effected by how much memory and cpu our app will require.

A bad example of a technology that failed the speed test and it seems that this technology is on the way down to the graveyard, is `Angular.js`.  
Released on 2009 that technology did not perform well in mobile phones, especially when the app grew more and more complex.  
The initial load was bad as well for `Angular.js`.  
The new Angular performance shows a lot of improvement from his predecessor, but still falls back from `React` and `Vue`.  
`React` and `Vue` are showing amazing speed result, with lower file size, and lower footprint on the cpu and memory.  
The last benchmarking test I saw showed that `Vue` was the best choice regarding speed, but the difference between `React` and `Vue` was very negligible.  
`Angular`, `React`, and `Vue` are good choices speed wise. In my opinion though, if you want your app running fast on mobile, i felt a bit sluginess when used `Angular` compared to `React`. 
`React` is a great choice regarding speed, for the initial load and user experience speed.  

## Learning Curve

`React` is a minimalistic library, with a well defined problem it's trying to solve.  
It's not a framework with tons of tools, and a documentation the size of Tolstoy's War and Peace.  
In fact reading the entire `React` docs from start to finish (which is highly recommended that you do while you are taking this course) will probably take you around 1-2 days.  
I'm going over the documentation every time before I teach a new course, and it doesn't take me too long.  
`React` is in charge of drawing the user interface, and keeping the user interface updated when changes occur, and that's pretty much it.
`React` has a really simple learning curve, much simpler than `Angular` and `Vue`, and it will not take you long to learn React.       

During the course of my career I had the privilege to be CTO of two companies.  
For me `React` was a blessing, first of all the fact that I could now target all frontend with a single technology was magical to me, moreover the fact that I can educate my developers on `React` pretty quickly because of the easy learning curve meant less money spent until the team was productive again.

`React` is a very good choice of technology for building a frontend app.  
I stumbled over the years on a lot of other instructors, that said:  

> "Why are you choosing React? you should go with Angular?" 
> or 
> "Why did you go with Angular? You should use React".  

I find those statements highly opinionated, and I find `React`, `Angular`, `Vue` excellent technology choices.  
Each technology has it's ups and downs, advantages and disadvantages, and so is `React`.
By the way, academeez was developed with `React` and a framework called [Next.js](https://academeez.com/next), did this site load fast, how is the feel on your smartphone, does the site run fast enough? Write your opinion in the comments.  
I will say this, `React` is the most popular choice today, will give you a high market value, very scalable and you can build advanced and complicated sites using it, and in general and excellent choice for creating frontend apps.

