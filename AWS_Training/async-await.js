const waitOne = () =>
    new Promise((resolve) => {
    setTimeout(() => resolve(1), 1000)
    })
// Thw "async" keyword wraps the following code is a Promise:
const waitThreeAsync = async () => {
    const a = await waitOne() // The await keyword blocks until the promise resolves
    const b = await waitOne()
    const c = await waitOne()
    return a + b + c
}
//...waitThreeAsync as a function is asynchronous - but has synchronous calls within it

// (A) To invoke and Promise code we need to either be in a "async" block
const begin = async () => {
    console.log(await waitThreeAsync())
}

console.log("Start now...")
begin() // 3
console.log("...done")
