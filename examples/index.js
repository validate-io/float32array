'use strict';

var isFloat32Array = require( './../lib' );

console.log( isFloat32Array( new Float32Array( 10 ) ) );
// returns true

console.log( isFloat32Array( new Int8Array( 10 ) ) );
// returns false

console.log( isFloat32Array( new Uint8Array( 10 ) ) );
// returns false

console.log( isFloat32Array( new Uint8ClampedArray( 10 ) ) );
// returns false

console.log( isFloat32Array( new Int16Array( 10 ) ) );
// returns false

console.log( isFloat32Array( new Uint16Array( 10 ) ) );
// returns false

console.log( isFloat32Array( new Int32Array( 10 ) ) );
// returns false

console.log( isFloat32Array( new Uint32Array( 10 ) ) );
// returns false

console.log( isFloat32Array( new Float64Array( 10 ) ) );
// returns false

console.log( isFloat32Array( new Array( 10 ) ) );
// returns false

console.log( isFloat32Array( {} ) );
// returns false

console.log( isFloat32Array( null ) );
// returns false
