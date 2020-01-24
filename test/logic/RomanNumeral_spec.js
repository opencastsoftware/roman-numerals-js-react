import {expect} from 'chai';

describe('Langton`s ant kata',() => {
    /*Squares on a plane are colored variously either black or white. We arbitrarily identify one square as the "ant". 
    The ant can travel in any of the four cardinal directions at each step it takes. The "ant" moves according to the rules below:
            At a white square, turn 90° right, flip the color of the square, move forward one unit
            At a black square, turn 90° left, flip the color of the square, move forward one unit*/

    describe('When dealing with square colours', () => {
        it('a black square changes to white when flipped', () => {
            const square = black()

            square.flip()

            expect(colour(square)).to.equal('white')
        });

        it('a white square changes to black when flipped', () => {
            const square = white()

            square.flip()
            
            expect(colour(square)).to.equal('black');
        });
    });

    describe('When dealing with an ant', () => {
        it('will be aware of the square it is on when the square is white', () => {
            const littleAnt = new Ant(white())

            expect(colour(littleAnt.square)).to.equal('white');
        });

        it('will be aware of the square it is on when the square is black', () => {
            const littleAnt = new Ant(black())

            expect(colour(littleAnt.square)).to.equal('black');
        });

        describe('When flipping the colour of the square it is on', () => {
            it('will flip from white to black', () => {
                const littleAnt = new Ant(white())
    
                littleAnt.flip()
    
                expect(colour(littleAnt.square)).to.equal('black')
            });
    
            it('will flip black to white', () => {
                const littleAnt = new Ant(black())
    
                littleAnt.flip()
    
                expect(colour(littleAnt.square)).to.equal('white')
            });
        });

        it('will be able to use a sat nav', () => {
            const littleAnt = new Ant(black())

            expect(littleAnt.myNextMove()).to.equal('left');
        });
    });

    describe('When dealing with an ants world', () => {
        it('will be populated with squares based on a length and width', () => {
            const myWorld = new World(5,5)

            expect(myWorld.squares.length).to.equal(25);
        });
    });

    describe("The Sat Nav", () => {
        it('for an ant on a white square will tell the ant to turn right', () => {
            const ant = new Ant(white())
            const satNav = new SatNav(ant);

            expect(satNav.nextSquare()).to.equal('right')
        })

        it('for an ant on a black square will tell the ant to turn left', () => {
            const ant = new Ant(black())
            const satNav = new SatNav(ant);

            expect(satNav.nextSquare()).to.equal('left')
        })
    });
});

class SatNav {
    constructor(ant) {
        this.ant = ant
    }

    nextSquare() {
        return (this.ant.square.colour == squareColour.WHITE) 
        ? 'right'
        : 'left';
    }
}

class World {
    constructor(length, width) {
        this.numberOfSquare = length * width;
    }

    get squares() {
        return Array(this.numberOfSquare).fill(white())
    }
}
class Ant {

    constructor(square) {
        this.currentSquare = square;
        this.satNav = new SatNav(this)
    }

    get square() {
        return this.currentSquare;
    }

    flip() {
        this.currentSquare.flip();
    }

    myNextMove() {
        return this.satNav.nextSquare()
    }

}

class Square {

    constructor() {
        this.colour = squareColour.WHITE
    }

    flip() {
        if (this.colour == squareColour.WHITE) {
            this.colour = squareColour.BLACK;
        } else {
            this.colour = squareColour.WHITE;
        }

        return this;
    }
}

const squareColour = Object.freeze({
    WHITE : 'white',
    BLACK: 'black'
})

function black(){
    const whiteSqaure = new Square
    return whiteSqaure.flip()
}

function white(){
    return new Square
}

function colour(square) {
    return square.colour;
}
