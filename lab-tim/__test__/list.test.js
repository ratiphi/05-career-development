'use strict';

const List = require('../lib/list');

describe('list.js', function() {
  beforeAll(() => this.list = new List(25, 50, 75, 100));
  describe('#push', () => {
    describe('what functionality of this method we are testing', () => {
      test('should return a new List with modified objects', () => {
        let newList = this.list.push(125);
        expect(newList[4].firstName).toBe(125);
        expect(this.length).toBe(5);
      });
    });
  });

  describe('#pop', () => {
    describe('what functionality of this method we are testing', () => {
      test('should return a new List with modified objects', () => {
        let item = this.list.pop();
        expect(item).toBe(100);
        expect(this.length).toBe(3);
      });
    });
  });

  describe('#forEach', () => {
    describe('what functionality of this method we are testing', () => {
      test('should return a new List with modified objects', () => {
        let newList = this.list.forEach(ele => {
          return ele * 2;
        });
        expect(newList[0]).toBe(50);
        expect(newList[1]).toBe(100);
        expect(newList[2]).toBe(150);
        expect(this.length).toBe(3);
      });
    });
  });

  describe('#map', () => {
    describe('what functionality of this method we are testing', () => {
      test('should return a new List with modified objects', () => {
        let newList = this.list.map(ele => {
          return ele += 1000;
        });
        expect(newList[0]).toBe(1050);
        expect(newList[1]).toBe(1100);
        expect(newList[2]).toBe(1150);
        expect(this.length).toBe(3);
      });
    });
  });

  describe('#filter', () => {
    describe('what functionality of this method we are testing', () => {
      test('should return a new List with modified objects', () => {
        let newList = this.list.filter(ele => {
          return ele > 1050;
        });
        expect(newList[0]).toBe(1100);
        expect(newList[1]).toBe(1150);
        expect(this.length).toBe(2);
      });
    });
  });

  describe('#reduce', () => {
    describe('what functionality of this method we are testing', () => {
      test('should return a new List with modified objects', () => {
        let result = this.list.reduce((acc, curr) => {
          return acc + curr;
        });
        expect(result).toBe(2250);
      });
    });
  });
});
