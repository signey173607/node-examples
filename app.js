const rect = require('./rectangle');

function solveRectangle(l, w) {
    console.log(`Solving for rectangle with values of ${l}, ${w}.`);
    rect(l, w, (err, rectangle) => {
        if(err) {
            console.log('Error:', err.message);
        }
        else {
            console.log(`The Perimeter of rectangle with values of ${l} and ${w}:  ${rectangle.perimeter()}`);
            console.log(`The area of rectangle with values of ${l} and ${w}: ${rectangle.area()}`);
        }
    });
    console.log('This statement is logged after the call to rect()');
}

solveRectangle(4,6);
solveRectangle(0,7);
solveRectangle(-2,8);
solveRectangle(9,5);