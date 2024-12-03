# Helpers plugin

A Javascript / Typescript plugin that adds helper functions for arrays, objects, and other prototypes or global functions, making it easier to write clean code.

🔥 Live preview <a href='https://przemyslawdrzewicz.github.io/helpers-plugin-preview/'>here</a> 👈

## Installation

Install via npm:

```bash
npm install helpers-plugin
```

## Import

Javascript / typescript example

```
import { register } from 'helpers-plugin'
register({ identifierName: 'customId' })
```

Explain `identifierName`

`identifierName` is a needed field when you use methods like for example `filter`. Thanks to this you don't have to write `filter(item => item.id === id)`. You can just write `filterById(id)`

## Usage

### Array Methods

These methods are added to the `Array.prototype`, allowing you to call them directly on arrays.

#### 1. `first()`

Gets the first element of the array.

```
const items = ['🍌', '🍎', '🍊']
console.log(items.first()) // Expected output: '🍌'
```

#### 2. `last()`

Gets the last element of the array.

```
const items = ['🍌', '🍎', '🍊']
console.log(items.last()) // Expected output: '🍊'
```

#### 3. `findById(id)`

Finds the first item in the array that has an `id` property matching the provided `id`.

```
const items = [
  { id: 1, name: 'Apple' },
  { id: 2, name: 'Banana' },
  { id: 3, name: 'Orange' },
]
console.log(items.findById(2)) // Expected output: { id: 2, name: 'Banana' }
```

If no `identifierName` is set, it will compare directly to the item.

```
const items = [1, 2, 3]
console.log(items.findById(2)) // Expected output: 2
```

#### 4. `findIndexById(id)`

Finds the index of the item in the array that has an `id` property matching the provided `id`.

```
const items = [
  { id: 1, name: 'Apple' },
  { id: 2, name: 'Banana' },
  { id: 3, name: 'Orange' },
]
console.log(items.findIndexById(2)) // Expected output: 1
```

#### 5. `filterById(id)`

Filters the array and returns all items where the `id` matches the provided `id`.

```javascript
const items = [
  { id: 1, name: "Apple" },
  { id: 2, name: "Banana" },
  { id: 3, name: "Apple" },
]
console.log(items.filterById(1)) // Expected output: [{ id: 1, name: 'Apple' }]
```

#### 6. `compare(secondArray)`

Compares two arrays to see if they are equal in terms of length and content (using `JSON.stringify`).

```javascript
const arr1 = [{ id: 1, name: 'Apple' }, { id: 2, name: 'Banana' }]
const arr2 = [{ id: 1, name: 'Apple' }, { id: 2, name: 'Banana' }]
console.log(arr1.compare(arr2)) // Expected output: true

const arr3 = [{ id: 1, name 'Apple' }]
console.log(arr1.compare(arr3)) // Expected output: false
```

### Types Methods

These methods are added to the `types` object, allowing you to call them to check the type of a value.

Import it like:

```
import { types } from 'helpers-plugin'
```

#### 1. `isBoolean(value)`

Checks if the provided value is a boolean.

```javascript
const value = true
console.log(types.isBoolean(value)) // Expected output: true

const value2 = "true"
console.log(types.isBoolean(value2)) // Expected output: false
```

#### 2. `isString(value)`

Checks if the provided value is a string.

```javascript
const value = "hello"
console.log(types.isString(value)) // Expected output: true

const value2 = 123
console.log(types.isString(value2)) // Expected output: false
```

#### 3. `isObject(value)`

Checks if the provided value is an object (including arrays).

```javascript
const value = { key: "value" }
console.log(types.isObject(value)) // Expected output: true

const value2 = []
console.log(types.isObject(value2)) // Expected output: true

const value3 = null
console.log(types.isObject(value3)) // Expected output: false
```

#### 4. `isArray(value)`

Checks if the provided value is an array.

```javascript
const value = [1, 2, 3]
console.log(types.isArray(value)) // Expected output: true

const value2 = { key: "value" }
console.log(types.isArray(value2)) // Expected output: false
```

#### 5. `isFunction(value)`

Checks if the provided value is a function.

```javascript
const value = () => {}
console.log(types.isFunction(value)) // Expected output: true

const value2 = "function"
console.log(types.isFunction(value2)) // Expected output: false
```

#### 6. `isNumber(value)`

Checks if the provided value is a number.

```javascript
const value = 123
console.log(types.isNumber(value)) // Expected output: true

const value2 = "123"
console.log(types.isNumber(value2)) // Expected output: false
```

### Content Methods

These methods are added to the `content` object, allowing you to check if a value is a non-empty object, array, or string.

Import it like:

```
import { content } from 'helpers-plugin'
```

#### 1. `isNotEmptyObject(value)`

Checks if the provided value is an object and contains at least one key.

```javascript
const value = { key: "value" }
console.log(content.isNotEmptyObject(value)) // Expected output: true

const value2 = {}
console.log(content.isNotEmptyObject(value2)) // Expected output: false

const value3 = []
console.log(content.isNotEmptyObject(value3)) // Expected output: false
```

#### 2. `isNotEmptyArray(value)`

Checks if the provided value is an array and contains at least one item.

```javascript
const value = [1, 2, 3]
console.log(content.isNotEmptyArray(value)) // Expected output: true

const value2 = []
console.log(content.isNotEmptyArray(value2)) // Expected output: false

const value3 = {}
console.log(content.isNotEmptyArray(value3)) // Expected output: false
```

#### 3. `isNotEmptyString(value)`

Checks if the provided value is a non-empty string.

```javascript
const value = "hello"
console.log(content.isNotEmptyString(value)) // Expected output: true

const value2 = ""
console.log(content.isNotEmptyString(value2)) // Expected output: false

const value3 = 123
console.log(content.isNotEmptyString(value3)) // Expected output: false
```
