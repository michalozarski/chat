var expect = require('expect');
var {
  isRealString
} = require('./validate');

describe('isRealString', () => {

  it('should reject non-string values', () => {
    var res = isRealString(98);
    expect(res).toBe(false);
  });

  it('should reject non-string values', () => {
    var res = isRealString('        ');
    expect(res).toBe(false);
  });

  it('should reject non-string values', () => {
    var res = isRealString('    a  ');
    expect(res).toBe(true);
  });

});
