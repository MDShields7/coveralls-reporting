/*jshint esversion: 6 */
module.exports = {
    add: function (x,y){
        return x + y;
    },
    multiply: function (x,y){
        return x * y;
    },
    subtract: function (x,y){
        return x - y;
    },
    divide: function (x,y){
        return x / y;
    },
    absoluteVal: function (x){
        return Math.abs(x);
    },
    reciprocal: function (x){
        return 1/x;
    }
};