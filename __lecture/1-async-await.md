# 3.6.1 - Async / Await

---

<blockquote>
    Async/Await is a long anticipated JavaScript feature that makes working with asynchronous functions much more _enjoyable_ and _easier to understand_.
    - It is built on top of Promises
    - is compatible with all existing Promise-based APIs.
</blockquote>

---

```js
const newPauseFunction = (sec) => {
    return new Promise(function(resolve) {
        console.log(`${sec}s pause`);
        setTimeout(() => resolve('resolve'), sec * 1000);
    });
}

newPauseFunction(1)
    .then(() => newPauseFunction(2))
    .then(() => newPauseFunction(3))
    .then(() => newPauseFunction(3))
    .then(data => console.log(data));
```

_let's convert it to async/await_

const doIt = async () => {
    await newPauseFunction(1);
    await newPauseFunction(2);
    await newPauseFunction(3);
    await newPauseFunction(3);
    //the async function waits until all 4 lines of code are completed before it gets console.log()
    console.log('no more awaits');
} 
doIt()

---

### Exercise

Convert the following to async/await

```js
transformText(string)
    .then((str) => allCaps(str))
    .then((str) => trimFirst(str))
    .then((str) => trimLast(str))
    .then((str) => replaceWithX(str))
    .then((str) => {
        console.log(str);
        return str;
    })
    .catch((err) => console.log(err));

const goForIt = async() => {
    try {  
        await allCaps(str)
        await trimFirst(str)
        await trimLast(str)
        await replaceWithx(str)
            console.log(str)}
    catch (err) {
            console.log('error')
}
goForIt()

```
// Scotts answer..

const transformText = async(string) => {
    try{
    const str = await allCaps(str);
    const nextString = await trimFirst(str);
    const nextNextString = await trimLast(str);
    const nextNextNextString = await replaceWithx(str);
    console.log(str);
    } catch (err) {
        console.log('error')
    }
}
transformText()
---

## Error Handling

As much as possible, you should wrap your `await`(s) inside of a `try/catch` block.

### Example

```js
const asyncPause = async () => {
    try {
        console.log('Go');
        await newPauseFunction(1);
        await newPauseFunction(2);
        await newPauseFunction(3);
        await newPauseFunction(3);
        console.log('Stop');
    } catch (err) { console.log(err) }
}
asyncPause();
```

---