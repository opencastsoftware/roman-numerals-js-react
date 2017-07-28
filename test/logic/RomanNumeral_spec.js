import {expect} from 'chai';

import RomanNumeral from '../../src/logic/RomanNumeral';

describe('RomanNumeral', () => {

    it('should return false', () => {
        expect(RomanNumeral()).to.equal(false);
    })

});
