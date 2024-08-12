import React from 'react';

function Banner({ reason, numGuesses, answer }) {
    const pluralise = numGuesses > 1;

    if (reason === 'win') {
        return (
            <div className="happy banner">
                <p>
                    <strong>Congratulations!</strong> Got it in{' '}
                    <strong>
                        {numGuesses} {pluralise ? 'guesses' : 'guess'}
                    </strong>
                    .
                </p>
            </div>
        );
    } else {
        return (
            <div className="sad banner">
                <p>
                    Sorry, the correct answer is <strong>{answer}</strong>.
                </p>
            </div>
        );
    }
}

export default Banner;
