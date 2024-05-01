import React, { PropsWithChildren, createContext, useContext,useState } from 'react';
import useLocalStorage from 'beautiful-react-hooks/useLocalStorage';

interface InputTextContextType {
  inputText: string;
  saveInputText: (inputText: string) => void;
}

const InputTextContext = createContext<InputTextContextType | undefined>(undefined);

const useInputText = () => {
  const context = useContext(InputTextContext);
  if (!context) {
    throw new Error('useInputText must be used within an InputTextProvider');
  }
  return context;
};

const InputTextProvider = ({ children }: PropsWithChildren) => {
  const [inputText, setInputText] = useLocalStorage<string>('inputText', '');

  const saveInputText = (value: string) => {
    //setInputText(value);
  };

  const value: InputTextContextType = {
    inputText: inputText || '',
    saveInputText,
  };

  return (
    <InputTextContext.Provider value={value}>
      {children}
    </InputTextContext.Provider>
  );
};

const InputTextConsumer = () => {
  const { inputText, saveInputText } = useInputText();
  const [txt, setTxt] = useState("");

  function handleTextChange(event: React.FormEvent<HTMLInputElement> ){
    setTxt(event.currentTarget.value);                
  }

  return (
    <div>
        <label htmlFor="input-text-input" >Text for Local Storage: </label><br/>
        <input
          id="input-text-input"
          type="text"
          placeholder="Enter text..."
          onChange={handleTextChange}
        />
        <br/><br/>
        <button onClick={() => {saveInputText(txt)}}>Save</button>

      <p>Input Text: { inputText ? 
        inputText : 
        <span className='warning'>!!! Nothing set in local storage !!!</span>
        }
      </p>
    </div>
  );
};

const App = () => {
  return (
    <InputTextProvider>
      <div>
        <h1>Local Storage Text Saver</h1>
        <h2>Instructions:</h2>
        <ol>
          <li>Type some text into the input.</li>
          <li>Click the "Save" button.</li>
          <li>Inspect local storage in your browser's dev tools.<br/>You'll see an entry with the key "inputText" and the value matching what you saved.</li>
        </ol>
        <InputTextConsumer />
      </div>
    </InputTextProvider>
  );
};

export default App;
