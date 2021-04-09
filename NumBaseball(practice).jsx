const { useState, useEffect } = require("react");
const React = require("react");

const NumBaseball = () => {
  const [randomNum, setRandomNum] = useState([]);
  const [userNum, setUserNum] = useState([]);
  let [strike, setStrike] = useState(0);
  let [ball, setBall] = useState(0);
  let [out, setOut] = useState(false);
  let [click, setClick] = useState(false);

  const getRandomNum = () => {
    console.log("랜덤 시작");

    let arr = new Array(0);
    let i = 0;

    while (randomNum.length <= 3) {
      let rdn = Math.floor(Math.random() * 9) + 1;
      console.log(arr.indexOf(rdn));

      // if (randomNum.length >= 3) break;
      if (i > 0 && arr.indexOf(rdn) === -1) {
        console.log();
        arr.push(rdn);
        setRandomNum(arr);
      } else if (i === 0) {
        arr.push(rdn);
        setRandomNum(arr);
      }
      i++;
    }
  };

  useEffect(() => {
    console.log("마운트");
    getRandomNum();
    setClick(false);
  }, [click]);

  const onChange = (e) => {
    console.log("입력중");
    setUserNum(
      e.target.value.split("").map((element) => {
        return parseInt(element);
      })
    );
  };

  const onClick = () => {
    console.log("클릭");
    console.log(randomNum, userNum);

    for (let j = 0; j < randomNum.length; j++) {
      if (j === j && randomNum[j] === userNum[j]) {
        setStrike(strike++);
      } else if (!strike && !ball) {
        console.log(out);
        setOut(true);
      } else {
        setBall(ball++);
      }
    }
  };

  return (
    console.log("strike: " + strike, "ball: " + ball, "out: " + out),
    (
      <>
        {out ? (
          <h1>아웃!!!</h1>
        ) : (
          <h1>
            {strike}스트라이트 {ball}볼입니다.
          </h1>
        )}
        <form>
          <input type="text" onChange={onChange}></input>
          <button type="button" onClick={onClick}>
            입력
          </button>
        </form>
      </>
    )
  );
};

module.exports = NumBaseball;
