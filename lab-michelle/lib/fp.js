'use strict';

const List = module.exports = function() {
  // console.log('args', arguments)
  for(let key in arguments) {
    this[key] = arguments[key];
  }
  this.length = arguments.length;
};

// PUSH: This is a pure method (FUNCTIONAL after lecture)
List.prototype.pushPure = function(value) {
  let newList = Object.assign({}, this);
  newList[newList.length++] = value;
  return newList;
};

//PUSH: This in not a pure method - modifies the original
List.prototype.push = function(value) {
  this[this.length++] = value;
  // this[this.length + 1] = value // Not what we want - does not increment the value of length
  return this;
};

//POP
List.prototype.pop = function() {
  let result = this[this.length - 1];
  delete this[--this.length];
  return result;
};

//FOR EACH
List.prototype.forEach = function(callback) {
  for(let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

//FILTER
List.prototype.filter = function(callback) {
  let result = [];
  for (let i in this) {
    if (callback(this[i], i, this)) {
      result[i] = this[i];
    }
  }
  return result;
};

//MAP


//REDUCE


//SLICE - not complete
List.prototype.slice = function(start, stop) {
  let counter = 0;
  let z = [];
  while (counter < stop ){
    for(var i = 0; i <this.length; i++){
      if (this.key[i] === start) {
        z.push(this.key[i]);
        delete this.key[i];
        counter++;
      }
    }
  }
  return z;
};
