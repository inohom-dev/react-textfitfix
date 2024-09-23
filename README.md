# react-textfitfix

This is a clone of the original repo, which is not maintained anymore and has compatibility problems with the latest version of React. I also included the type declarations in case you use TS.

- fit **headlines and paragraphs** into any element
- **fast:** uses binary search for efficiently find the correct fit
- **100%** react-goodness
- works with **any style** configuration (line-height, padding, ...)
- **[check out the demo](http://malte-wessel.github.io/react-textfit/)**
- **[check out the original repo](https://github.com/malte-wessel/react-textfit)**

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Modes](#modes)
- [API](#api)
- [License](#license)

## Installation

```bash
npm install react-textfitfix --save
```

## Usage

### Headlines

```javascript
import { Textfit } from "react-textfitfix";

class App extends Component {
  render() {
    return <Textfit mode="single">Fat headline!</Textfit>;
  }
}
```

#### Respect the element's height when using single lines

```javascript
import { Textfit } from "react-textfitfix";

class App extends Component {
  render() {
    return (
      <Textfit mode="single" forceSingleModeWidth={false}>
        Fat headline!
      </Textfit>
    );
  }
}
```

### Paragraphs

```javascript
import { Textfit } from "react-textfitfix";

class App extends Component {
  render() {
    return (
      <Textfit mode="multi">
        Lorem <strong>ipsum</strong> dolor sit amet, consectetur adipisicing
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
        qui officia deserunt mollit anim id est laborum.
      </Textfit>
    );
  }
}
```

## Modes

### `single`

**Algorithm steps:**

```
1. binary search to fit the element's width
2. if forceSingleModeWidth=false and text overflows height
    2a. binary search to also fit the elements height
```

### `multi`

**Algorithm steps:**

```
1. binary search to fit the element's height
2. if text overflows width
    2a. binary search to also fit the elements width
```

## API

### `<Textfitfix>`

#### Props

- `mode` (single|multi) Algorithm to fit the text. Use single for headlines and multi for paragraphs. Default is `multi`.
- `forceSingleModeWidth` (Boolean) When mode is single and forceSingleModeWidth is true, the element's height will be ignored. Default is `true`.
- `min` (Number) Minimum font size in pixel. Default is `1`.
- `max` (Number) Maximum font size in pixel. Default is `100`.
- `throttle` (Number) Window resize throttle in milliseconds. Default is `50`.
- `onReady` (Function) Will be called when text is fitted.

## License

MIT
