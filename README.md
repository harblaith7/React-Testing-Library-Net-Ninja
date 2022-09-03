# React Testing Library Tutorial - The Net Ninja - with new tests

### What is this?

This is my take on the tests in the tutorial. Armed with Laith's excellent explanation, I have tried to write my own tests replacing the tests he has written and doing some (minor) changes to the Todo application.

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
