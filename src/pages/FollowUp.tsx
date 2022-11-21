import * as React from "react";
import { useState, useRef, useCallback } from "react";

const FollowUp = () => {
  const [word, setWord] = useState("박성수");
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  const inputEl = useRef<HTMLInputElement>(null);

  const onSubmitForm = useCallback<(e: React.FormEvent) => void>((e) => {
    e.preventDefault();
    const input = inputEl.current;
    if (word[word.length - 1] === value[0]) {
      setResult("딩동댕");
      setWord(value);
      setValue("");
      if (input) {
        input.focus();
      }
    } else {
      setResult("땡");
      setValue("");
      if (input) {
        input.focus();
      }
    }
  }, [value]);

  const onChange = useCallback<
    (e: React.ChangeEvent<HTMLInputElement>) => void
  >((e) => {
    setValue(e.currentTarget.value);
    console.log(value)
  }, [value]);
  return (
    <>
      <div>
        <div>{word}</div>
        <form onSubmit={onSubmitForm}>
          <input ref={inputEl} value={value} onChange={onChange} />
          <button>입력!</button>
        </form>
        <div>{result}</div>
      </div>
    </>
  );
};

export default FollowUp;
