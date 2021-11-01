module.exports = (x, y, callback) => {
    if(x <= 0 || y <= 0) {
        callback(new Error(`The values of rectangle should be greater than zero. given: ${x}, ${y}.`));
    }
    else {
        setTimeout(() => 
            callback(null, {
                perimeter: () => 2 * (x + y),
                area: () => x * y
            }, 2000)
        );
    };
}
