# "this"
- "this" refers to the object wher the function is called and not the object where the function is defined;
- "bind()" what should "this" refer to in the calling function;
- arrow functions keep "this" bind-ed to the context where it is defined;
- the "this" keyword’s value has nothing to do with the function itself, how the function is called determines "this's" value;
- "implicit binding": "this" refers to whatever is on the left side when the function is invoked;
- "explicit binding": call() or apply(); "this" will point to the object passed as first parameterto the call() or apply() function;
- **explicit binding takes precedence over implicit binding**;
- "hard binding": done with bind() (ES5). bind() returns a new function that is hard-coded to call the original function with the "this" context set as you specified. **Hard binding takes precedence over explicit binding**;
- when the function has been called with new, "this" refers to the new instance created; when a function is called with new, it does not care about implicit, explicit, or hard binding, it just creates the new context—which is the new instance


## References
https://www.codementor.io/@dariogarciamoya/understanding--this--in-javascript-du1084lyn
https://www.codementor.io/@dariogarciamoya/understanding-this-in-javascript-with-arrow-functions-gcpjwfyuc
https://www.youtube.com/watch?v=Pv9flm-80vM