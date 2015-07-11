### False Or Value

This module exports a function which can be used to return a passed value or return false.
Useful for setting defaults.


```javascript
var falseOrV = require('falseorvalue')

var options = {
    aString: falseOrV(undefined) || 'Some default',
    aNumber: falseOrV(NaN) || 10,
    anObject: falseOrV({}) || {a: 1},
    anArray: falseOrV([]) || [1,2,3]
}
```

Notes:

* Returns 0, -0 and -n as passed.
* Does not handle empty multi-dimensional arrays. 
* Does not handle objects with prototype methods or properties, but without enumerable properties.