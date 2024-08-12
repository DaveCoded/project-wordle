import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

import GuessInput from '../GuessInput';
import GuessResultsList from '../GuessResultsList';
import Banner from '../Banner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
    const [guesses, setGuesses] = React.useState([]);

    const addGuess = guess => setGuesses([...guesses, guess]);

    const hasWon = guesses.find(guess => guess === answer);
    const hasLost = guesses.length === NUM_OF_GUESSES_ALLOWED;
    const gameOver = hasWon || hasLost;

    return (
        <>
            <GuessResultsList guesses={guesses} answer={answer} />
            <GuessInput addGuess={addGuess} disabled={gameOver} />
            {gameOver && (
                <Banner
                    reason={hasWon ? 'win' : 'lose'}
                    numGuesses={guesses.length}
                    answer={answer}
                />
            )}
        </>
    );
}

export default Game;
