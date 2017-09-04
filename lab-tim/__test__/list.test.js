'use strict';

const List = require('../lib/list');

describe('list.js', function() {
  beforeAll(() => this.list = new List(25, 50, 75, 100));
  describe('#push', () => {
    describe('adds item to list', () => {
      test('should return list with 125 added to the end', () => {
        this.list.push(125);
        expect(this.list[4]).toBe(125);
        expect(this.list.length).toEqual(5);
      });
    });
  });

  describe('#pop', () => {
    describe('remove item from list and return item', () => {
      test('should return last item from array', () => {
        let item = this.list.pop();
        expect(item).toBe(125);
        expect(this.list.length).toBe(4);
      });
    });
  });

  describe('#map', () => {
    describe('do something to each item in the list', () => {
      test('should return a new List with 1000 added to each item', () => {
        let newList = this.list.map(ele => {
          return ele += 1000;
        });
        expect(newList[0]).toBe(1025);
        expect(newList[1]).toBe(1050);
        expect(newList[2]).toBe(1075);
      });
    });
  });

  describe('#filter', () => {
    describe('filter out items from the list and return items', () => {
      test('should return a new List with only items over 40 in value', () => {
        let newList = this.list.filter(ele => {
          return ele > 40;
        });
        expect(newList[0]).toBe(50);
        expect(newList[1]).toBe(75);
      });
    });
  });

  describe('#reduce', () => {
    describe('reduce down list in some way', () => {
      test('should return result of adding all items in list', () => {
        let result = this.list.reduce((acc, curr) => {
          return acc + curr;
        });
        expect(result).toBe(250);
      });
    });
  });

  describe('#forEach', () => {
    describe('loop over each item in list and perform task', () => {
      test('should return list multiplied by 2', () => {
        this.list.forEach(ele => {
          return ele * 2;
        });
        expect(this.list[0]).toBe(25);
        expect(this.list[1]).toBe(50);
        expect(this.list[2]).toBe(75);
        expect(this.list[3]).toBe(100);
      });
    });
  });
});
