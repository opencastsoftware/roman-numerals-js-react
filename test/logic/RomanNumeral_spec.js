import {expect} from 'chai';

/*THE BERLIN CLOCK*/
/*The Berlin Clock (Mengenlehreclock or Berlin Uhr) is a clock that tells the time using a series of illuminated coloured blocks, 
as you can see in the picture for this project.

The top lamp blinks to show seconds- it is illuminated on even seconds and off on odd seconds.

The next two rows represent hours. The upper row represents 5 hour blocks and is made up of 4 red lamps. 
The lower row represents 1 hour blocks and is also made up of 4 red lamps.

The final two rows represent the minutes. The upper row represents 5 minute blocks, and is made up of 11 lamps- every third lamp is red, 
the rest are yellow. The bottom row represents 1 minute blocks, and is made up of 4 yellow lamps.*/

describe('Berlin Clock', () => {
    describe('Top lamp', () => {
        it('will be ON with even second', () => {
            const myLamp = topLamp(2)

            expect(myLamp).to.equal("X");
        })

        it('Will be OFF with odd second', () => {
            const offLamp = topLamp(1);
            expect(offLamp).to.equal('Y');
        })
    });

    /*
    SECONDS `X` `Y`
    UPPERROW `Y``Y`Y`Y`
    LOWERROW `Y`Y`Y`Y`
    
    */

    describe('Hour Row', () => {
        it('Upper row will all lamps OFF at 00:00', () => {
            const row = hourUpperRow();
            expect(row[0]).to.equal('Y');
            expect(row[1]).to.equal('Y');
            expect(row[2]).to.equal('Y');

            expect(row[3]).to.equal('Y');

        });

        it ('lower will will have one lamp ON at 01:00', () => {
            const lowerRow = hourLowerRow();

            expect(lowerRow[0]).to.equal('X');
            expect(lowerRow[1]).to.equal('Y');
            expect(lowerRow[2]).to.equal('Y');

            expect(lowerRow[3]).to.equal('Y');
        });
    });

});


const topLamp = (value) => {
    return value % 2 === 0 ? 'X' : 'Y'
}


const hourUpperRow = () => {
    return ['Y','Y','Y','Y'];
}

const hourLowerRow = () => {
    return ['X','Y','Y','Y'];
}