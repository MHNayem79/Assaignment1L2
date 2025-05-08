"use strict";
{
    //
    function formatString(input, toUpper) {
        if (toUpper === true || toUpper === undefined) {
            return input.toUpperCase();
        }
        else {
            return input.toLowerCase();
        }
    }
    //
}
{
    //
    function filterByRating(items) {
        return items.filter(item => (item.rating > 4));
    }
    //
}
{
    //
    function concatenateArrays(...arrays) {
        return arrays.flat();
    }
    //
}
{
    //
    class Vehicle {
        make;
        year;
        constructor(make, year) {
            this.make = make;
            this.year = year;
        }
        getInfo() {
            console.log(`Make: ${this.make}, Year: ${this.year}`);
        }
    }
    class Car extends Vehicle {
        model;
        constructor(make, year, model) {
            super(make, year);
            this.model = model;
        }
        getModel() {
            console.log(`Model: ${this.model}`);
        }
    }
    //
}
{
    //
    function processValue(value) {
        if (typeof value === 'string') {
            return value.length;
        }
        else {
            return value * 2;
        }
    }
    //
}
{
    function getMostExpensiveProduct(products) {
        if (products.length === 0)
            return null;
        return products.reduce((max, product) => product.price > max.price ? product : max);
    }
    //
}
{
    //
    let Day;
    (function (Day) {
        Day[Day["Monday"] = 0] = "Monday";
        Day[Day["Tuesday"] = 1] = "Tuesday";
        Day[Day["Wednesday"] = 2] = "Wednesday";
        Day[Day["Thursday"] = 3] = "Thursday";
        Day[Day["Friday"] = 4] = "Friday";
        Day[Day["Saturday"] = 5] = "Saturday";
        Day[Day["Sunday"] = 6] = "Sunday";
    })(Day || (Day = {}));
    function getDayType(day) {
        if (day === Day.Saturday || day === Day.Sunday) {
            return 'Weekend';
        }
        else {
            return 'WeekDay';
        }
    }
    //
}
{
    //
    async function squareAsync(n) {
        if (n < 1)
            throw new Error('Error:Negative number not allowed');
        await new Promise(res => setTimeout(res, 1000));
        return n * n;
    }
    //
}
