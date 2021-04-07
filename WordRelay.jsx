// client.jsx 에서 바로 사용할 수 있지만 그렇게 하면 재사용성 측면에서 비효율이 발생될 수 있다.
// 그래서 컴포넌트를 나눠주었다.
// npm에서 리액트를 불러와준다.
const { useState, useRef } = require("react");
const React = require("react");

const WordRelay = () => {
  const [word, setWord] = useState("제로초");
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  const inputRef = useRef(null);

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (word[word.length - 1] === value[0]) {
      setResult("딩동댕"),
        setWord(value),
        setValue(""),
        inputRef.current.focus(); // // dom에 직접 접근 할 수 있는 포커스
    } else {
      setResult("땡"), setValue(""), inputRef.current.focus(); // dom에 직접 접근 할 수 있는 포커스
    }
  };

  const onChangeInput = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <div>{word}</div>
      <form onSubmit={onSubmitForm}>
        <label htmlFor="wordInput">글자를 입력하세요.</label>
        <input
          id="wordInput"
          className="wordInput"
          ref={inputRef}
          value={value}
          onChange={onChangeInput}
        />
        <button>입력!</button>
      </form>
      <div>{result}</div>
    </>
  );
};

module.exports = WordRelay;
