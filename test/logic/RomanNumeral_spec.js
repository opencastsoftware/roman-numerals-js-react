import {expect} from 'chai';

import RomanNumeral from '../../src/logic/RomanNumeral';

describe('RomanNumeral', () => {

    it('should return V', () => {
        expect(RomanNumeral()).to.equal('V');
    })

});
