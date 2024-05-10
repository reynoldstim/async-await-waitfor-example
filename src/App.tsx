import React, { useState } from 'react';

function reverseString(theString: string): string {
  return theString.split('').join('');
}

function delayedReverseString(theString: string): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const reversedString = reverseString(theString);
      resolve(reversedString);
    }, 250);
  });
}

const InputTextReverser = () => {
  const [text, setText] = useState("");
  const [reversedText, setReversedText] = useState('');

  function handleTextChange(event: React.FormEvent<HTMLInputElement> ){
    setText(event.currentTarget.value);
  }

  function handleReverseClick() {
    delayedReverseString(text).then((reversedText) => {
      setReversedText(reversedText);
    });
  }

  return (
    <div>
        <label htmlFor="input-text-input" >Text to be reversed:</label><br/>
        <input
          id="input-text-input"
          type="text"
          placeholder="Enter text..."
          onChange={handleTextChange}
        />
        <br/><br/>
        <button onClick={handleReverseClick}>Reverse!</button>

      <p>Reversed Text: { reversedText ? 
        <span>{reversedText}</span> : 
        <span className='warning'>!!! Nothing entered yet !!!</span>
        }
      </p>
    </div>
  );
};

const App = () => {
  return (
      <div>
        <h1>The Magical Text Reverser</h1>
        <h2>Instructions:</h2>
        <ol>
          <li>Type some text into the input.</li>
          <li>Click the "Reverse!" button.</li>
          <li>You'll see your text reversed magically on the screen!</li>
        </ol>
        <InputTextReverser />
      </div>
  );
};

export default App;
