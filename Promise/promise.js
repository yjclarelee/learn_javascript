let promise = new Promise((res, rej) => {
    setTimeout(() => res("Yay"), 500);
    // setTimeout(() => rej(new Error('nope')), 500);
})

promise.then(result => console.log(result), error => console.log(error));