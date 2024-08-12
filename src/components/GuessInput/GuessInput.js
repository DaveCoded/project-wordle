import React from 'react';

function GuessInput({ addGuess, disabled }) {
    const [guess, setGuess] = React.useState('');

    const handleChange = event => {
        setGuess(event.target.value.toUpperCase());
    };

    const handleSubmit = event => {
        event.preventDefault();
        console.log({ guess: guess });
        addGuess(guess);
        setGuess('');
    };

    return (
        <form className="guess-input-wrapper" onSubmit={handleSubmit}>
            <label htmlFor="guess-input">Enter guess:</label>
            <input
                id="guess-input"
                type="text"
                value={guess}
                onChange={handleChange}
                pattern="[A-Za-z]{5}"
                disabled={disabled}
            />
        </form>
    );
}

export default GuessInput;
