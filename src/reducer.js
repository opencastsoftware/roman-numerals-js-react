import * as actiontypes from './actiontypes';

function setState(newState) {
    return Object.assign({}, newState);
}

function setNumber(state, number) {
    return Object.assign({}, { number });
}

export default function(state = {}, action) {
    switch (action.type) {
        case actiontypes.SET_STATE:
            return setState(action.state);
        case actiontypes.SET_NUMBER:
            return setNumber(state, action.number);
        case actiontypes.SET_INPUT_ROMAN_NUMERAL:
            return setRomanNumeral(state, action.romanNumeral);
        default:
            return state;
    }
    return state;
}
