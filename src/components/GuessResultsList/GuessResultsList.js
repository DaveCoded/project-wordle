import React from 'react';

import Guess from '../Guess';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { checkGuess } from '../../game-helpers';

function GuessResultsList({ guesses, answer }) {
    const rows = range(0, NUM_OF_GUESSES_ALLOWED);

    return (
        <div className="guess-results">
            {rows.map(row => {
                const guess = guesses[row] ? checkGuess(guesses[row], answer) : [];
                return <Guess key={row} guess={guess} answer />;
            })}
        </div>
    );
}

export default GuessResultsList;
