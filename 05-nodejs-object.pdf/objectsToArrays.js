function toArray(obj) {
	return Object.entries(obj)
}


// Test.assertSimilar(toArray({ a: 1, b: 2 }), [["a", 1], ["b", 2]])
// Test.assertSimilar(toArray({ foo: 33, bar: 45, baz: 67 }), [["foo", 33], ["bar", 45], ["baz", 67]])
// Test.assertSimilar(toArray({ shrimp: 15, tots: 12 }), [["shrimp", 15], ["tots", 12]])
// Test.assertSimilar(toArray({}), [])