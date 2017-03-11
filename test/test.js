(function() {
  'use strict';

  var myApp = require('../app/library.js');

  describe('Min-Max Numbers in a List: ', function () {

    describe('Return the min and max number in the list in a new list follows `[min, max]`', function () {

      it('should return [1,4] for [1, 2, 3 , 4]', function () {
        expect(myApp.findMinMax([1, 2, 3, 4])).toEqual([1, 4]);
      });

      it('should return [4, 6] for [6, 4]', function () {
        expect(myApp.findMinMax([6, 4])).toEqual([4, 6]);
      });

      it('should return [2, 78] for [4, 66, 6, 44, 7, 78, 8, 68, 2]', function () {
        expect(myApp.findMinMax([4, 66, 6, 44, 7, 78, 8, 68, 2])).toEqual([2, 78]);
      });

      it('should return [-78, 0] for [0, -66, -6, -44, -7, -78, -8, -68, -1]', function () {
        expect(myApp.findMinMax([0, -66, -6, -44, -7, -78, -8, -68, -1])).toEqual([-78, 0]);
      });

      it('should return [4, 66] for [4, 66, 6, 44, 5, 8, 18, 8, 62]', function () {
        expect(myApp.findMinMax([4, 66, 6, 44, 5, 8, 18, 8, 62])).toEqual([4, 66]);
      });

      it('should return [0, 8] for [0, 1, 2, 3, 4, 5, 6, 7, 8]', function () {
        expect(myApp.findMinMax([0, 1, 2, 3, 4, 5, 6, 7, 8])).toEqual([0, 8]);
      });

      it('should return [22, 668] for [34, 166, 76, 44, 77, 178, 28, 668, 22]', function () {
        expect(myApp.findMinMax([34, 166, 76, 44, 77, 178, 28, 668, 22])).toEqual([22, 668]);
      });

      it('should return [12, 178] for [14, 66, 60, 44, 17, 178, 18, 68, 12]', function () {
        expect(myApp.findMinMax([14, 66, 60, 44, 17, 178, 18, 68, 12])).toEqual([12, 178]);
      });

    });

    describe('Return the number in the list in a new list follows `[min]` when the number is the min and max number in that list', function () {

      it('should return [4] for [4, 4, 4, 4]', function () {
        expect(myApp.findMinMax([4, 4, 4, 4])).toEqual([4]);
      });

    });

    describe('Return undefined for an empty array', function () {

      it('should return undefinned for an empty array', function () {
        expect(myApp.findMinMax([])).not.toBeDefined();
      });

    });

  });

})();