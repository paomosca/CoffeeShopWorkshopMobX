This project was bootstrapped with [Create React Native App](https://github.com/react-community/create-react-native-app).

Below you'll find information about performing common tasks. The most recent version of this guide is available [here](https://github.com/react-community/create-react-native-app/blob/master/react-native-scripts/template/README.md).

## How to start and use this project

Checkout this project to your React Native Workspace

```
git checkout https://github.com/paomosca/CoffeeShopWorkshopMobX
```

Install all dependencies
```
yarn
# or
npm install
```


## Available Scripts

If Yarn was installed when the project was initialized, then dependencies will have been installed via Yarn, and you should probably use it to run these commands as well. Unlike dependency installation, command running syntax is identical for Yarn and NPM at the time of this writing.

### `npm start`

Runs your app in development mode.

Open it in the [Expo app](https://expo.io) on your phone to view it. It will reload if you save edits to your files, and you will see build errors and logs in the terminal.

Sometimes you may need to reset or clear the React Native packager's cache. To do so, you can pass the `--reset-cache` flag to the start script:

```
npm start -- --reset-cache
# or
yarn start -- --reset-cache
```

#### `npm run ios`

Like `npm start`, but also attempts to open your app in the iOS Simulator if you're on a Mac and have it installed.

### Why Ignite?

* Easily spin up a new React Native app with best practices built-in
* No runtime! This is a developer tool only, not a library you have to depend on
* Works with iOS and Android out of the box
* API-ready -- hook it up and start talking to your server
* Standard-js compliant code

### Why MobX?

MobX is a battle tested library that makes state management simple and scalable by transparently applying functional reactive programming (TFRP). The philosophy behind MobX is very simple:

Anything that can be derived from the application state, should be derived. Automatically.

### Why MobX over Redux?

[Here](http://slides.com/paomosca/mobx-redux-comparison#/) you can find the presentation's slides.

Less code than redux, shorter learning curve.
IMHO MobX is a best approach for the most common react-native projects.
Redux is very powerfull, but when you start learning RN you must understand too many concepts before you can even start... and redux is not one of the smallest obstacles i met when i started.


## :heart: Special Thanks :heart:

#### [Why this Workshop?](http://bit.ly/2q88UkR) Redux or MobX: An attempt to dissolve the Confusion
#### [Who inspired me?](https://blog.callstack.io/write-react-native-apps-in-2017-style-with-mobx-e2dffc209fcb) - Write React-Native apps in 2017 style with MobX
#### [Who created Ignite?](https://infinite.red) - Learn More About Infinite Red

## :clipboard: Documentation :clipboard:

Ignite 2 documentation? [Go here](https://github.com/infinitered/ignite/blob/master/docs/README.md)

React Native's documentation? [Go here](http://facebook.github.io/react-native/docs/getting-started.html)

MobX documentation? [Go here](https://mobx.js.org/)

React-Navigation documentation? [Go here](https://reactnavigation.org/docs/navigators/)

## Credits

Written by [Paolo Mosca](https://www.linkedin.com/in/paolomosca)
