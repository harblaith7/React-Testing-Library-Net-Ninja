# React Testing Library Tutorial - The Net Ninja - with new tests

### What is this?

This is my take on the tests in the tutorial. Armed with Laith's excellent explanation, I have tried to write my own tests replacing the tests he has written and doing some (minor) changes to the Todo application.

I have also added a few things such as:
* Code coverage using Jest - minimum threshold of 100% for functions and branches and 95% for lines and statements
* Fixed bugs

### Changelog

[30 August 2022]
* Cloned
* Cleaned out all tests, leaving only the app
* Created branch `new_tests` off of `main` for writing tests

[1 September 2022]
* Tests for Header
* Tests for TodoFooter

[2 September 2022]
* Tests for TodoList
* Tests for AddInput
* Mocking using `jest.mock()` and file in `__mocks__` returns `undefined` if the internal function is called; using `jest.mock(fn)` implementation with `mockImplementation()` in tests instead

[3 September 2022]
* Tests for FollowersList (have to find a way to move axios mock to its own file - currently not working)
* Fixed issue with hardcoded "Header" showing as title (HTML title attribute) instead of the acutal page title

[5 September 2022]
* Changed value of `npm test` script to show colored output in terminal
* Added code coverage script and threshold values
* Added test to verify that clicking one todo task does not affect the others (this test is testing an edge case, indicated by missing coverage)
