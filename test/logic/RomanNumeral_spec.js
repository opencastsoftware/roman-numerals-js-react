import {expect} from 'chai';

/*
The universe of the Game of Life is an infinite, two-dimensional orthogonal grid of square cells, 
each of which is in one of two possible states, alive or dead, (or populated and unpopulated, respectively).
 Every cell interacts with its eight neighbours, which are the cells that are horizontally, vertically, or diagonally adjacent. 
 At each step in time, the following transitions occur:

Any live cell with fewer than two live neighbours dies, as if by underpopulation.
Any live cell with two or three live neighbours lives on to the next generation.
Any live cell with more than three live neighbours dies, as if by overpopulation.
Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.

*/

describe('The game of life', () => {
    describe('A cell', () => {
        it('will be alive by default', () => {
            const myCell = new Cell();

            expect(myCell.isAlive()).to.equal(true);
        });

        it('will be able to die', () => {
            const myCell = new Cell();

            myCell.kill();

            expect(myCell.isAlive()).to.equal(false);
        });

        it('will be able to check position', () => {
            const myCell = new Cell();
            expect(myCell.isAtPosition()).to.equal((2, 2));
        });
    });

    describe("The world", () => {
        it('will be populated with cells given a size', () => {
            const myWorld = new World(5);

            expect(myWorld.population().length).to.equal(25);
            expect(myWorld.population()[0].isAlive()).to.equal(true);
        });
    });
});

class Cell {
    constructor() {
        this.isCellAlive = true;
    }

    isAlive() {
        return this.isCellAlive;
    }

    kill() {
        this.isCellAlive = false;
    }

    isAtPosition() {
        return (2,2);
    }

}


class World {

    constructor(size) {
        this.cells = []

        for (var i = 0; i < size * size; i++) {
            this.cells.push(new Cell)
        } 
    }

    population() {
        return this.cells;
    }
}