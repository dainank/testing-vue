# Testing Vue
Practicing testing of Vue.js (2.X) applications.

## To Run
```js
npm i
npm run dev
```

## Additional Commands
- ~~`npm run lint` : if adding new code~~
- `npm run build` : to build dist

## Topics
- automated testing
- unit testing (Jest)
    - testing component output
- testing methods/functions
    - using stubs
- testing native DOM events
    - also custom Vue events
- testing Vuex store
    - also components that interact with Vuex
- factory functions for better test-file structure
- Vue Router testing
- testing mixins and filters
    - also components using them
- snapshot testing
- test code in server-side rendered apps
- end-to-end testing

## Introduction
**The core goal behind testing is to make sure that the application works correctly adn does not ship with any bugs.**

### The Advantages of Testing:
- improved code quality
- limits bugs

### The Consequences of *Not* Testing:
- cripples project

### The Forms of Testing:
- **manual testing**: *check that an application works correctly by interacting with it yourself.*
- **automated testing**: *writing a program to perform the checks for you* (this is the focus).

## Automated Testing
- processs of using programs to check that my software works correctly
- extra code to test application code
- allows testing of app as many times as desired without any problems

### Integration with Pull Request
- setup service to download the pull request branch
- run test suite
- tests passed/failed reported back on Git Repository

## End-To-End Testing
- in frontend applications; automated browser to check whether an application works correctly from user's perspective

e.g:
```js
function testCalculator(browser) {
  browser
    .url('http://localhost:8080')
    .click('#button-1')
    .click('#button-plus')
    .click('#button-1')
    .click('#button-equal')
    .assert.containsText("#result", "2")
    .end();
}
```

- powerful time-savers
- end-to-end are slower than automated unit tests
- debugging end-to-end tests can be tough
    - this can be avoided by running the tests on a Docker container

## Unit Tests
*Running tests against the smallest parts of an application.*
    - normally functions
    - components also possible (in frameworks)

e.g:
```js
// sum.js
export default function sum(a, b) {
  return a + b
}

// sum.spec.js
import sum  from '../sum'
function testSum() {
  if (sum(1, 1) !== 2) {
    throw new Error('sum(1, 1) did not return 2')
  }
}

testSum()
```

- unit tests can act as documentation
- clear indicators of where the problems/bugs lie in a program
- can be irritating when refactoring is required
- cannot effectively test entire constructs (combinations of code)

### Examples of How Components Are Tested:
Inputs:
- component props
- user actions (e.g. button click)
- vue events
- data in Vuex store

Outputs:
- emitted events
- external function calls

## Snapshot Testing
*Takes picture of running application and compares it against previously saved pictures.*
- good for testing whether application renders correctly after test fails.
- modern frameworks like Jest have modernized the process:
    - instead of comparing screenshots, we compare serializable values

## Combining Tests
Example for frontend Vue application:
- 10% | E2E Tests
- 30% | Snapshot Tests
- 60% | Unit Tests

## Test-Driven Development
1. Write failing test. (*red*)
2. Make the test pass with source code. (*green*)
3. Refactor code to make it more readable.

### More Realistic Approach:
1.  Decide the components I need.
2.  Write unit tests and source code for each component.
3.  Style the components.
4.  Add snapshot tests for the finished components.
5.  Test the code manually in the browser.
6.  Write an end-to-end test.

## Application Requirements (Hacker News)
### Features
*social news website (alternative to reddit)*
- dynamic feed of items
    - news articles
    - blog posts
    - job listings
- users can upvote/downvote items

### Tech Stack
- **Vue**           | View
- **Vuex**          | State Management
- **Vue Router**    | Client-Side Routing
