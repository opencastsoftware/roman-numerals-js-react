import {expect} from 'chai';

/*The Berlin Clock (Mengenlehreclock or Berlin Uhr) is a clock that tells the time using a series 
of illuminated coloured blocks, as you can see in the picture for this project.

The top lamp blinks to show seconds - it is illuminated on even seconds and off on odd seconds.

The next two rows represent hours. The upper row represents 5 hour blocks and is made up of 4 red lamps. 
The lower row represents 1 hour blocks and is also made up of 4 red lamps.

The final two rows represent the minutes. The upper row represents 5 minute blocks, 
and is made up of 11 lamps- every third lamp is red, the rest are yellow. 
The bottom row represents 1 minute blocks, and is made up of 4 yellow lamps.
*/

describe('The Berlin Clock', () => {
    describe("The top lamp", ()=> {
        it('should be ON in an even number', () => {
            const myLamp = new TopLamp();

            expect(myLamp.status(2)).to.equal(true);
        });
        it('should be OFF in an odd number', () => {
            const myLamp = new TopLamp();

            expect(myLamp.status(1)).to.equal(false)
        })
    });

    describe("The third row", () => {
        it("for one hour, only one lamp lits up", () => {
            const myThirdRowLamp = new thirdRowLamp();

            expect(myThirdRowLamp.status(1)[0]).to.equal(true);
        });

        it("for two hours, two lamps are lit up", () => {
            const myThirdRowLamp = new thirdRowLamp();

            expect(myThirdRowLamp.status(2)[0]).to.equal(true);
        });

        it("for three hours, three lamps are lit up", () => {
            const myThirdRowLamp = new thirdRowLamp();

            expect(myThirdRowLamp.status(3)[2]).to.equal(true);
        });

        it("for five hours, one lamp is lit up", () => {
            const myThirdRowLamp = new thirdRowLamp();

            expect(myThirdRowLamp.status(5)[0]).to.equal(true);
        });
    });

});

class TopLamp
{
    status(seconds){
        return seconds % 2 === 0
    }
}

class thirdRowLamp
{
    status(hours){
        if (hours == 1)
            return [true,false,false,false]
            else if (hours == 2)
            return [true, true, false, false]
            else if (hours == 3)
            return [true,true,true,false]
    }
}
