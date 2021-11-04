---
title: "Higher Order Functions & Arrays"
metaTitle: "Higher Order Functions & Arrays"
metaDescription: "ES6 introduced us with many contemporary functions which makes it easier for us to loop through arrays. We talk about forEach, filter, map, sort, reduce in this article"
date: 2021-09-07 07:00:00
author: "Ali Hassnain"
image: "../../images/manolo-chretien-RpC-9e0ORNM-unsplash.jpg"
tags:
  - Tutorials
---

A higher order function is which takes a callback function as an argument.

ES6 introduced us with many contemporary functions which makes it easier for us to loop through arrays.

Some of the most common in these are

- .forEach
- .filter
- .map
- .sort
- .reduce

**ForEach**

The forEach function takes multiple arguments, where the

- first argument is considered to be the current item within an array
- second argument (optional) is the index
- third argument (optional) is an array on which the function was called upon
- and a callback function

This function returned undefined.

Example:

```javascript
const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2003 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
]

// Filter out companies by Retail
const retailCompanies = []
companies.forEach(elem => {
  if (elem.category === "Retail") {
    retailCompanies.push(elem)
  }
})

console.log(retailCompanies)
```

**Filter**

The filter method can be used to filter an array according to conditional methods. This function returns the new array and we do not need to 'push' the item into a separate array (but this also means that it will change the original array if not saved in a new variable).

Example:

```javascript
const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2003 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
]

// Filter out companies by Retail
const retailCompanies = companies.filter(elem => {
  if (elem.category === "Retail") {
    return true
  }
})
```

**Map**

The map method is similar to the forEach loop - however, the major difference is that this doesn't change or 'mutate' the original array, but, creates a new copy of it.

```javascript
const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2003 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
]

// create a copy of companies
const companiesCopy = companies.map(elem => {
  return elem
})

console.log(companiesCopy)

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32]

// Get SquareRoot of all the items within an array

const squareRootAges = ages.map(elem => {
  return Math.sqrt(elem)
})

console.log(squareRootAges)

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32]

// Get SquareRoot of all the items within an array and then multiply by 2

const squareRootAges = ages
  .map(elem => {
    return Math.sqrt(elem)
  })
  .map(elem => {
    return elem * 2
  })

console.log(squareRootAges)
```

**Sort**

The sort() method takes in an array, and sorts and returns it. It takes the first comparable item as its first argument - and the second comparable item as its second argument.

```javascript
const names = [
  "Paras",
  "Adam",
  "Levine",
  "Bokhari",
  "Zebra",
  "Ookla",
  "Shahenshah",
]

// Sort alphabetically

const sortedNames = names.sort((a, b) => {
  if (a > b) {
    return 1
  } else {
    return -1
  }
})

console.log(sortedNames)

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32]

// sort ages from low to high
const sortedAges = ages.sort((a, b) => {
  if (a > b) {
    return 1
  } else {
    return -1
  }
})

console.log(sortedAges)

// Sorted Companies by Start Year
const sortedCompanies = companies.sort((a, b) => {
  if (a.start > b.start) {
    return 1
  } else {
    return -1
  }
})

console.log(sortedCompanies)
```

**reduce()**

The reduce method takes an array and reduces it to a single value. The return value of the function is stored in a 'total'. Reduce does not execute the function for array elements without values.

```javascript
const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32]

// Add all ages together with ForEach
let sum = 0
ages.forEach(elem => {
  sum += elem
})

// Add all ages together with Reduce
const ageSum = ages.reduce((total, elem) => {
  return total + elem
}, 0) // 0 is the original value of the total.

console.log(ageSum)

const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2003 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
]

// Get Total years for all companies

const rangeYears = companies.reduce((total, elem) => {
  const difference = elem.end - elem.start
  return total + difference
}, 0)

console.log(rangeYears)
```
