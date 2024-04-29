const { sum, modulus, sayHelloTo, duplicateObject, addProduct } = require('./function')

test('should sum two numbers', () => {
    const result = sum(2, 1)

    expect(result).toBe(3)
})

test('should return the absolute value of a number', () => {
    expect(modulus(-10)).toBe(10)
    expect(modulus(10)).toBe(10)
})

test('should say hello to someone', () => {
    expect(sayHelloTo('Victor')).toBe('Hello, Victor!')
})

test('should be able duplicate an abject', () => {
    const animal = { species: 'Cat', color: 'Black' }

    const clone = duplicateObject(animal)

    expect(clone).toEqual(animal)
})

test('should be able to add a product to a cart', () => {
    const cart = []

    addProduct('notebook', cart)
    addProduct('blue pen', cart)
    addProduct('black pen', cart)

    expect(cart).toContain('notebook')
    expect(cart).toContain('blue pen')
    expect(cart).toContain('black pen')
})