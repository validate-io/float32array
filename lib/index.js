'use strict';

// FUNCTIONS //

var isStr = Object.prototype.toString;


// IS FLOAT32ARRAY //

/**
* FUNCTION: isFloat32Array( value )
*	Validates if a value is a Float32Array.
*
* @param {*} value - value to validate
* @returns {Boolean} boolean indicating if a value is a Float32Array
*/
function isFloat32Array( value ) {
	return isStr.call( value ) === '[object Float32Array]';
} // end FUNCTION isFloat32Array()


// EXPORTS //

module.exports = isFloat32Array;
