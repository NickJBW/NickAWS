const callback = () => console.log("Out for delivery")

const asyncTask = () =>
    new Promise((resolve) => {
        // Do something that takes ages, like cook a Pizza
        // Then
        sleep(2000)
        console.log("3")
        resolve("It's cooked!")
    })
asyncTask().then(callback)

console.log("Waiting...")