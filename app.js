const rect = require('./rectangle');

function solveRectangle(l, w) {
    console.log(`Solving for rectangle with values of ${l}, ${w}.`);

    if(l<=0 || w<=0) {
        console.log(`The values of rectangle should be greater than zero. given: ${l}, ${w}.`);
    }

    else{
        console.log(`The area of rectangle is: ${rect.area(l,w)}.`);
        console.log(`The perimeter of rectangle is: ${rect.perimeter(l,w)}.`);
    }
}

solveRectangle(4,6);
solveRectangle(0,7);
solveRectangle(-2,8);
solveRectangle(9,5);