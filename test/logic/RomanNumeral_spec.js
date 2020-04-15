import {expect} from 'chai';

/*
Squares on a plane are colored variously either black or white. We arbitrarily identify one square as the “ant”. 
The ant can travel in any of the four cardinal directions at each step it takes. The “ant” moves according to the rules below:

At a white square, turn 90° right, flip the color of the square, move forward one unit
At a black square, turn 90° left, flip the color of the square, move forward one unit*/

const north = 1
const east = 2
const west = 3


describe('Ant walking as defined', () => {

    it('Ant hit white square whilst heading north',()=>{
        const ant = {}
        const expectedDirection = east
        const square = "White"
        expect(walk(ant,north,square)).to.equal(expectedDirection)
    });

    it('Ant hit black sqaure whilst heading north', ()=>{
        const ant = {}
        const expectedDirection = west
        const square = "Black"
        expect(walk(ant,north,square)).to.equal(expectedDirection)
    })

});


describe('Ant walking east then hit black sqaure and then hit white sqauire', ()=>{

    

});

function walk(ant,direction,square) {
    if (square === "White"){
        if (direction === north){
            return east;
        }
    }
    if (square === "Black"){
        if (direction === north){
            return west;
        }
    }
    return direction;
}
