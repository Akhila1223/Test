function print() {
    return new Promise ((resolve, reject) => {
        const isTall = Math.random() > 0.5;
        setTimeout(() => {
            if(isTall)
                resolve("Yes");
            else
                reject("No");
        }, 2000) 
    })
}

print()
    .then(res => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    })