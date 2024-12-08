declare global {
  interface Array<T> {
    first(): T | undefined
    last(): T | undefined
    findById(id: number): T | undefined
    findIndexById(id: number): T | undefined
    filterById(id: number): T | undefined
    compare(secondArray: any): boolean | undefined
  }
}

/* register */
let identifierName = ""

export function register(params: any) {
  identifierName = params.identifierName
}

/* prototypes */
Array.prototype.first = function () {
  return this[0]
}

Array.prototype.last = function () {
  return this[this.length - 1]
}

Array.prototype.findById = function (id) {
  if (!identifierName) return this.find((item) => item === id)
  return this.find((item) => item[identifierName] === id)
}

Array.prototype.findIndexById = function (id) {
  if (!identifierName) return this.findIndex((item) => item === id)
  return this.findIndex((item) => item[identifierName] === id)
}

Array.prototype.filterById = function (id) {
  if (!identifierName) return this.filter((item) => item === id)
  return this.filter((item) => item[identifierName] === id)
}

Array.prototype.compare = function (secondArray) {
  if (!Array.isArray(this) || !Array.isArray(secondArray)) return undefined

  const preparedFirstArray = JSON.stringify(this)
  const preparedSecondArray = JSON.stringify(secondArray)

  const isEqualLength = preparedFirstArray.length === preparedSecondArray.length
  const isEqualString = preparedFirstArray === preparedSecondArray

  return isEqualLength && isEqualString
}

/* global functions */
export const types = {
  isBoolean: (value: any) => typeof value === "boolean",
  isString: (value: any) => typeof value === "string",
  isObject: (value: any) =>
    !!value && typeof value === "object" && !Array.isArray(value),
  isArray: (value: any) => Array.isArray(value),
  isFunction: (value: any) => typeof value === "function",
  isNumber: (value: any) => typeof value === "number",
}

export const content = {
  isNotEmptyObject: (value: any) =>
    types.isObject(value) && !!Object.keys(value).length,
  isNotEmptyArray: (value: any) => types.isArray(value) && !!value.length,
  isNotEmptyString: (value: any) => types.isString(value) && value,
}
