# Assignment for COMP.SE.200-2024-2025-1 Software Testing Tampere university

## Purpose of this repository
This is the project for the assignment in Software Testing course
at Tampere University by Lauri Pollari and Minja Survonen.

## Contains
Original repository: https://github.com/otula/COMP.SE.200-2024-2025-1
The original repository only contains the source code that is under testing, `package.json` skeleton
and LICENSE file. In this repository there is also a test folder containing all the tests made for 10 files (including add, 
ceil, compact, countBy, filter, get, reduce, slice, upperfirst and words) and the configuration files for the tools used and Github Actions.

Source code folder contains a separate license file that must **NOT** be removed under any circumstances!
Removing this license file directly violates terms and conditions of the software under testing.
Individuals who remove or modify the license file will also carry the consequences.

## Tools used
The unit tests are made using Jest and coverage is in Coveralls.

## How to run the tests
Install dependencies: npm install
Coverage: Run npm test -- --coverage (more detailed test descriptions) OR npm run coverage
Tests: npm test (.test/<test-file>.test.js)
Coverage locally: Open coverage/lcov-report/index.html in a browser to view line-by-line coverage

## Coverage in Coveralls
[![Coverage Status](https://coveralls.io/repos/github/MSurvonen/utilityLibraryTests/badge.svg?branch=main)](https://coveralls.io/github/MSurvonen/utilityLibraryTests?branch=main)
