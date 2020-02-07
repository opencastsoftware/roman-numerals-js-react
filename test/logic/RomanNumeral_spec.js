import {expect} from 'chai';


/*The Berlin Clock (Mengenlehreclock or Berlin Uhr) is a clock that tells the time using a series 
of illuminated coloured blocks, as you can see in the picture for this project.

The top lamp blinks to show seconds - it is illuminated on even and off on odd seconds.

The next two rows represent hours. The upper row represents 5 hour blocks and is made up of 4 red lamps. 
The lower row represents 1 hour blocks and is also made up of 4 red lamps.

The final two rows represent the minutes. The upper row represents 5 minute blocks, 
and is made up of 11 lamps- every third lamp is red, the rest are yellow. 
The bottom row represents 1 minute blocks, and is made up of 4 yellow lamps.
*/

describe('The Berlin Clock', () => {
    describe('The top lamp', () => {
        it('should be LIT on even seconds', () => {

            const myLamp = new Lamp()

            expect(myLamp.status(2)).to.equal("ON");
        });

        it('should be OFF on odd seconds', () => {
            const myLamp = new Lamp()
            expect(myLamp.status(1)).to.equal("OFF");
        });
    });

    describe('The second lamp', () => {
        it('should be of size = 4', () => {
            const myLamp = new Lamp();
            
            expect(myLamp.hourClock.length).to.equal(4);
        });

        it('should have hourclock first lamp LIT for 2AM',()=>{
            const myLamp = new Lamp();
            
            expect(myLamp.hourClockStatus(2)).to.equal(['LIT','OFF','OFF','OFF']);
        });
    });
});

/***** */
class Lamp {
    constructor(){
        this.hourClock = ['OFF', 'OFF', 'OFF', 'OFF']
    }

    status(seconds) {
        if(seconds % 2 == 0) {
            return "ON"
        } else {
            return "OFF"
        }
    }

    hourClockStatus(hours) {
        const index = 0;
        index = hours / 5;
        this.hourClock[index] = 'LIT';
    }

}

