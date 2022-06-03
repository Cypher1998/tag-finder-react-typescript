import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';

const TagInput = () => {
  const [text, setText] = useState('');
  const appContext = useContext(AppContext);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    appContext?.addToTag(text);
    setText('');
  };

  const deleteTag = (text: string) => {
    appContext?.deleteFromTag(text);
  };

  return (
    <section className="formTag">
      <form onSubmit={onSubmit}>
        <div>
          <input
            type="text"
            value={text}
            placeholder="enter tag here..."
            onChange={(e) => setText(e.target.value)}
          />
          <button type="submit">Add Tag</button>
        </div>
      </form>
      <div className="tagDiv">
        <ul>
          {appContext?.tagArray.map((tag) => {
            return (
              <li>
                <span>{tag}</span>
                <button onClick={() => deleteTag(tag)}>X</button>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
export default TagInput;
