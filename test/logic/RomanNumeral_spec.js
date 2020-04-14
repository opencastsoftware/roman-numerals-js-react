import {expect} from 'chai';

/*
The Berlin Clock (Mengenlehreclock or Berlin Uhr) is a clock that tells the time using a series of illuminated coloured blocks, 
as you can see in the picture for this project.

The top lamp blinks to show seconds- it is illuminated on even seconds and off on odd seconds.

The next two rows represent hours. The upper row represents 5 hour blocks and is made up of 4 red lamps. 
The lower row represents 1 hour blocks and is also made up of 4 red lamps.

The final two rows represent the minutes. The upper row represents 5 minute blocks, and is made up of 11 lamps- every third lamp is red, 
the rest are yellow. The bottom row represents 1 minute blocks, and is made up of 4 yellow lamps.*/

describe('The top lamp', () => {
    it('on odd seconds it will be false', () => {

        const topLampStatus = topLamp(1);

        expect(topLampStatus).to.equal(false);
    });

    it('on even seconds it will be true', () => {

        const topLampStatus = topLamp(2);

        expect(topLampStatus).to.equal(true);
    });
    
});

describe('Hour rows', () => {
    it('at 5 oclock have the first block on', () => {

        const middleLampStatus = middleLamps(5);

        expect(middleLampStatus[0]).to.equal(true);
    });

    it('at 00:00 oclock everything will be turned off', () => {

        const middleLampStatus = middleLamps(0);

        expect(middleLampStatus[0]).to.equal(false);
        expect(middleLampStatus[1]).to.equal(false);
        expect(middleLampStatus[2]).to.equal(false);
        expect(middleLampStatus[3]).to.equal(false);
    });

    it('at 15:00 oclock there will be three on', () => {

        const middleLampStatus = middleLamps(15);

        expect(middleLampStatus[0]).to.equal(true);
        expect(middleLampStatus[1]).to.equal(true);
        expect(middleLampStatus[2]).to.equal(true);
        expect(middleLampStatus[3]).to.equal(false);
    });

    it('at 20:00 oclock everything will be turned on', () => {

        const middleLampStatus = middleLamps(20);

        expect(middleLampStatus[0]).to.equal(true);
        expect(middleLampStatus[1]).to.equal(true);
        expect(middleLampStatus[2]).to.equal(true);
        expect(middleLampStatus[3]).to.equal(true);
    });

    it('at 19:30  there will be three on', () => {

        const middleLampStatus = middleLamps(19.5);

        expect(middleLampStatus[0]).to.equal(true);
        expect(middleLampStatus[1]).to.equal(true);
        expect(middleLampStatus[2]).to.equal(true);
        expect(middleLampStatus[3]).to.equal(false);
    });

    it('at 01:00 there will be 1 bottom row lit', () => {

        const middleLampStatus = middleLamps(1);

        expect(middleLampStatus[0]).to.equal(false);
        expect(middleLampStatus[1]).to.equal(false);
        expect(middleLampStatus[2]).to.equal(false);
        expect(middleLampStatus[3]).to.equal(false);

        expect(middleLampStatus[4]).to.equal(true);
        expect(middleLampStatus[5]).to.equal(false);
        expect(middleLampStatus[6]).to.equal(false);
        expect(middleLampStatus[7]).to.equal(false);
    });

    it('at 04:00 there will be 4 bottom row lit', () => {

        const middleLampStatus = middleLamps(1);

        expect(middleLampStatus[0]).to.equal(false);
        expect(middleLampStatus[1]).to.equal(false);
        expect(middleLampStatus[2]).to.equal(false);
        expect(middleLampStatus[3]).to.equal(false);

        expect(middleLampStatus[4]).to.equal(true);
        expect(middleLampStatus[5]).to.equal(true);
        expect(middleLampStatus[6]).to.equal(true);
        expect(middleLampStatus[7]).to.equal(true);
    });

    
    
});
function topLamp(seconds){
    if(seconds%2===0){
        return true;
    }
    
    return false;
}

function middleLamps(hours){    
    let rtnArray = [false, false, false, false];
    if(hours!==0){
        const divider = Math.floor(hours/5);
        let i = 0;
        while(i<divider){
            rtnArray[i]=true;
            i++;
        }
    }
    rtnArray.push(true);
    rtnArray.push(false);

    rtnArray.push(false);

    rtnArray.push(false);


    return rtnArray;
}