function invert(o) {
    const obj = {};
  
    for (const clave in o) {
      const valor = o[clave];
      obj[valor] = clave;
    }
    
    return obj;
}


// Test.assertDeepEquals(invert({"a": 1, "b": 2, "c": 3}), {1: "a", 2: "b", 3: "c"})
// Test.assertDeepEquals(invert({"z": "q", "w": "f"}), {"q": "z", "f": "w"})
// Test.assertDeepEquals(invert({"zebra": "koala", "horse": "camel"}), {"koala": "zebra", "camel": "horse"})