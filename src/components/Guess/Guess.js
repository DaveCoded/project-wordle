import React from 'react';
import { range } from '../../utils';

const WORD_LENGTH = 5;

function Guess({ guess }) {
    const cells = range(0, WORD_LENGTH);

    return (
        <p className="guess">
            {cells.map(cell => {
                const status = guess.length ? guess[cell].status : '';
                const letter = guess.length ? guess[cell].letter : '';

                return (
                    <span key={cell} className={`cell ${status}`}>
                        {letter}
                    </span>
                );
            })}
        </p>
    );
}

export default Guess;
