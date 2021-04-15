import React, { Component } from "react";

function getNumbers() {} // 숫자 네 개를 겹치지 않고 랜덤하게 뽑는 함수

export default class NumBaseball extends Component {
  state = {
    result: "",
    value: "",
    answer: getNumbers(),
    tries: [],
  };

  // 화살표 함수를 쓰지 않으면 constructor를 다시 써야하는 그 부분이 지저분해질 수 있고 이해가 어려워진다.
  onSubmitForm = () => {};

  onChangeInput = () => {};

  render() {
    return (
      <>
        <h1>{this.state.result}</h1>
        <form onSubmit={this.onSubmitForm}>
          <input
            maxLength={4}
            value={this.state.value} // 얘
            onChange={this.onChangeInput} // 얘 세트
          />
        </form>
        <div>시도: {this.state.tries.length}</div>
        <ul>
          {[
            { fruit: "감", taste: "맛있다" },
            { fruit: "귤", taste: "맛있다" },
            { fruit: "배", taste: "맛있다" },
            { fruit: "밤", taste: "맛있다" },
            { fruit: "무", taste: "맛있다" },
            { fruit: "사과", taste: "맛있다" },
          ].map((v, i) => (
            <li key={v.fruit + v.taste}>
              <b>{v.fruit}</b> - {i}
            </li>
          ))}
        </ul>
      </>
    );
  }
}

// export default NumBaseball;
