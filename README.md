# Examplar

[live site](https://examplar-code.netlify.app)

## motivation

One of the main competencies of computer programmers is reading code. Also, the purpose of reading code is then to be able to do something, whether that be to update a part of the sytem, introduce a new element, or delete something.

In order to get better at reading code, programmers need to actually practice doing it. Further, if time is going to be spent on this, it makes the most sense for learners to practice reading actual authentic code, that is most similar to what they will need to read and understand (again, in order to *do* something) in the real world.

A lot of the examples that are given in learning materials are highly contrived and don't bear much resemblance to code as it is actually used (eg, understand a function that takes an input and returns it times itself). It would be much more authentic to read actual code snippets, if one is interested in gaining understanding of functions, lists, dictionaries, conditionals, and so forth.

## similarities to corpus linguistics

The semi-recent (now almost 30 years old) trends in corpus linguistics of creating learning materials that are based on, and informed by, a descriptive analysis of language rather than prescriptive ideas, has clearly won the day.

So too, might it eventually come to be in the field of software education. The source data is a lot messier and less studied, though it's also a lot easier to obtain source data these days with the proliferation of free open source platforms like GitHub.

## practical applications

Where corpus studies utilize tools like KWIC (key word in context) lines to examine collocations in context, we could potentially do the same thing, analyzing recursive functions in context. With the ability to create abstract syntax trees, and compute cyclomatic complexity, it might be possible to provide opportunities for learners to investigate something like "higher order functions in context", and see both the contextualized inputs and outputs of the individual functions, identifying similarities between different uses of this same "family" of functions.

Moreover, we could do this, not with contrived examples that are time-consuming for instructors to create, maintain, and provide feedback on, but they can be automatically created and disseminated instantly across a global platform.

## Examplar the project

This current project is an attempt to showcase the very minimal possibilities of something like this, and it contains (at present) 25 examples of each of the following in python code taken from actual github repositories:

- for loops
- if conditionals
- dictionary assignment
- dictionary comprehensions
- list assignment
- list comprehensions
- functions

When viewing a particular code snippet example, there's a link that will go directly to where it's located in the original github source.

The data is created with https://github.com/lpmi-13/python-code-corpus, and I'd eventually like to have other languages included in the exercises.

## Running locally

```
$ git clone git@github.com:lpmi-13/examplar
$ npm install
$ npm start
```
 
