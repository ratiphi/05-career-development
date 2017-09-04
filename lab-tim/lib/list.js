'use strict';


const List = module.exports = function() {
  for (let key in arguments) {
    this[key] = arguments[key];
  }
  this.length = arguments.length;
};

List.prototype.push = function (value) {
  this[this.length++] = value;
  return this;
};

List.prototype.pop = function () {
  let result = this[this.length - 1];
  delete this[--this.length];
  return result;
};

List.prototype.forEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

List.prototype.map = function (callback) {
  let result = new List();
  for (let i = 0; i < this.length; ++i) {
    result[i] = callback(this[i], i, this);
  }
  return result;
};

List.prototype.filter = function (callback) {
  let result = new List();
  for (let i = 0; i < this.length; ++i) {
    if (callback(this[i], i, this)) {
      result[result.length++] = this[i];
    }
  }
  return result;
};

List.prototype.reduce = function (callback, initial) {
  let i = 0;
  let result;
  if (initial) {
    result = initial;
  } else {
    result = this[i++];
  }
  for (i; i < this.length; ++i) {
    result = callback(result, this[i], i, this);
  }
  return result;
};
