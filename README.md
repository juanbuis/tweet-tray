
# Tweet Tray 🐦

[![CircleCI](https://img.shields.io/circleci/project/github/jonathontoon/tweet-tray.svg)](https://circleci.com/gh/jonathontoon/tweet-tray) [![Github Releases](https://img.shields.io/github/downloads/jonathontoon/tweet-tray/total.svg)](https://github.com/jonathontoon/tweet-tray/releases)
[![Project License](https://img.shields.io/github/license/jonathontoon/tweet-tray.svg)](https://github.com/jonathontoon/tweet-tray/blob/master/LICENSE.md)

### Table of Contents

- [Introduction](#introduction)
- [Downloads](#downloads)
- [Report Bugs](#report-bugs)
- [Development](#development)
- [Deployment](#deployment)
- [Acknowledgements](#acknowledgements)

## Introduction
<img alt="OSX Day" src="https://i.imgur.com/rL4jWFz.png" width="320"/>    <img alt="Windows Day" src="https://i.imgur.com/WWluLuq.png" width="320"/>

Tweet Tray is a small application which allows you to tweet from your desktop system tray or status bar, without any further distractions. The core technology used consists of [Electron](https://github.com/electron/electron), [React](https://github.com/facebook/react) + [Redux](https://github.com/reactjs/redux) and [Styled Components](https://github.com/styled-components/styled-components). All transpiled from ES6 Javascript.

## Downloads

#### 🍎 [MacOS](https://github.com/jonathontoon/tweet-tray/releases/download/v1.0.3/tweet-tray-v103.dmg) 
#### 🏨 [Windows](https://github.com/jonathontoon/tweet-tray/releases/download/v1.0.3/tweet-tray-v103.exe)
#### 🐧 [Linux (AppImage)](https://github.com/jonathontoon/tweet-tray/releases/download/v1.0.3/tweet-tray-v103.AppImage) 
#### 🐧 [Linux (DEB File)](https://github.com/jonathontoon/tweet-tray/releases/download/v1.0.3/tweet-tray-v103.deb)

See [releases](https://github.com/jonathontoon/tweet-tray/releases) for more information.

## Report Bugs
Please create a Github [issue](https://github.com/jonathontoon/tweet-tray/issues) and provide as much information as possible regarding the bug, including images or error codes. To make things as uniform as possible please follow the guidelines set out in `ISSUE_TEMPLATE.md`.

## Development

1. Fork the Tweet Tray repository on Github to your own account then clone it locally.

2. To run Tweet Tray locally you will need to first install [npm](https://www.npmjs.com/get-npm) and [yarn](https://yarnpkg.com/lang/en/docs/install/) package managers.

3. Setup the applications' dependencies by navigating to the `tweet-tray` directory and run `yarn install`.

4. Before you can use all functions of Tweet Tray you'll need to create your own [Twitter OAuth Application](https://apps.twitter.com/app/new) to test. You don't need to set a callback URL, as Tweet Tray uses a mannually input Authorization code. After that, take the Consumer Key and Secret and update your local `config.js` file found under `app/utils`.

5. After everything has been installed simply call `yarn dev` to run the development build. To run the production build you can call `yarn prestart` followed by `yarn start`.

## Development

For all new features or bug fixes please create an issue in the main repository first (so we can track what goes into each release) then simply submit a pull request from your own fork into the original `develop` branch. To make sure the changes are easily reviewable please repect the format set out in `PULL_REQUEST_TEMPLATE.md`.

## Deployment

To create an installable build simply call `yarn package`, which will create an executable based on your current operating system. If you want to debug something in a packaged build you can call `DEBUG_PROD=true yarn package`.

## Acknowledgements

This project is based off [electron-react-boilerplate](https://github.com/chentsulin/electron-react-boilerplate), all methodloligies still apply, except for the removal of Flow and SASS. Issue and pull request templates based on formats by [yoshuawyts](https://raw.githubusercontent.com/yoshuawuyts/templates/master/github/).
