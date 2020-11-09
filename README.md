# KJI-AutoUnitTest

[![npm version](https://img.shields.io/npm/v/karma-jasmine.svg?style=flat-square)](https://www.npmjs.com/package/karma-jasmine)
[![npm downloads](https://img.shields.io/npm/dm/karma-jasmine.svg?style=flat-square)](https://www.npmjs.com/package/karma-jasmine)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/karma-runner/karma-jasmine)

[![Build Status](https://img.shields.io/travis/karma-runner/karma-jasmine/master.svg?style=flat-square)](https://travis-ci.org/karma-runner/karma-jasmine)
[![Dependency Status](https://img.shields.io/david/karma-runner/karma-jasmine.svg?style=flat-square)](https://david-dm.org/karma-runner/karma-jasmine)
[![devDependency Status](https://img.shields.io/david/dev/karma-runner/karma-jasmine.svg?style=flat-square)](https://david-dm.org/karma-runner/karma-jasmine?type=dev)

![HTML](https://img.shields.io/badge/-HTML-333333?style=flat&logo=HTML5)&nbsp;
![CSS](https://img.shields.io/badge/-CSS-333333?style=flat&logo=CSS3&logoColor=1572B6)
![JavaScript](https://img.shields.io/badge/-JavaScript-333333?style=flat&logo=javascript)&nbsp;
![Node.js](https://img.shields.io/badge/-Node.js-333333?style=flat&logo=node.js)&nbsp;

> Thank for the [Jasmine](https://jasmine.github.io/) testing framework.

## Introduction

Based on [Karma](https://github.com/karma-runner/karma) + [Jasmine](https://github.com/jasmine/jasmine) + [Istanbul](https://github.com/gotwarlost/istanbul)+ [Node.js](https://github.com/nodejs/node) Implementation of automated unit testing framework.

## Table of Contents

- [KJI-AutoUnitTest](#kji-autounittest)
  - [Introduction](#introduction)
  - [Table of Contents](#table-of-contents)
    - [Karma](#karma)
    - [Jasmine](#jasmine)
    - [Istanbul](#istanbul)
    - [Node.js](#nodejs)
  - [Usage](#usage)
    - [1.Installation](#1installation)
    - [2.Execute Karma Unittest](#2execute-karma-unittest)
    - [3.Check Istanbul Code-Coverage](#3check-istanbul-code-coverage)

### Karma

A simple tool that allows you to execute JavaScript code in multiple real browsers.
The main purpose of [Karma](https://github.com/karma-runner/karma) is to make your test-driven development easy, fast, and fun.

### Jasmine

A [Karma](https://github.com/karma-runner/karma) plugin - adapter for [Jasmine](https://github.com/jasmine/jasmine) testing framework.

### Istanbul

[Istanbul](https://github.com/gotwarlost/istanbul) is a JS code coverage tool that computes statement, line, function and branch coverage with module loader hooks to transparently add coverage when running tests. Supports all JS coverage use cases including unit tests, server side functional tests and browser tests. Built for scale.

### Node.js

[Node.js](https://github.com/nodejs/node) is an open-source, cross-platform, JavaScript runtime environment. It executes JavaScript code outside of a browser. For more information on using [Node.js](https://github.com/nodejs/node), see the [Node.js Website](https://nodejs.org/).

## Usage

### 1.Installation

```bash
npm install
```

### 2.Execute Karma Unittest

```bash
karma start karma.conf.js
```

### 3.Check Istanbul Code-Coverage

```bash
open build/reports/coverage/report-html/index.html
```

For more information about project see the [homepage](https://github.com/YX-XiaoBai/KJI-AutoUnitTest)
