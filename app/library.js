'use strict'

module.exports = {
 
 findMinMax: function(list) {
    var maxValue = Math.max.apply(null, list);
    var minValue = Math.min.apply(null, list);
    if(minValue !== maxValue)
     return [minValue, maxValue];
    else if(minValue === maxValue)
     return [minValue];
 }

}