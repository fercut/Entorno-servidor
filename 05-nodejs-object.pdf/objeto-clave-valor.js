function keysAndValues(obj) {

    const arrKey = new Array;
    const arrValue = new Array;
    const arrayGlobal = new Array;
    let i = 0

    for (const [key, value] of Object.entries(obj)) {
    arrKey[i] = key;
    arrValue[i] = value;  
    i++;
    }
 
    arrayGlobal[0] = arrKey;
    arrayGlobal[1] = arrValue;

    return arrayGlobal;
  }
  
  
  // keysAndValues({ a: 1, b: 2, c: 3 })
  // ➞ [["a", "b", "c"], [1, 2, 3]]
  