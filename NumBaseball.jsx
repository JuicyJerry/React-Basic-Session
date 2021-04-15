import React, { Component } from "react";
import Try from "./Try";
function getNumbers() {
  const candidates = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const array = [];

  for (let i = 0; i < 4; i += 1) {
    const chosen = candidates.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
    array.push(chosen);
  }
} // 숫자 네 개를 겹치지 않고 랜덤하게 뽑는 함수

export default class NumBaseball extends Component {
  state = {
    result: "",
    value: "",
    answer: getNumbers(),
    tries: [], // push 사용하며 안 돼요, 리액트가 뭐가 바뀐건지 확인을 못함
  };

  onSubmitForm = (e) => {
    e.preventDefault();
    if (this.state.value === this.state.answer.join("")) {
      this.setState({
        result: "홈런",
        tries: [
          ...this.state.tries,
          { try: this.state.value, result: "홈런!" },
        ],
      });
      alert("게임을 다시 시작합니다!");
      this.setState({
        value: "",
        answer: getNumbers(),
        tries: [],
      });
    } else {
      const answerArray = this.state.value.split("").map((v) => parseInt(v));
      let strike = 0;
      let ball = 0;
      if (this.state.tries.length >= 9) {
        this.setState({
          result: `10번 넘게 틀려서 실패! 답은 ${this.state.answer.join(
            ","
          )}였습니다!`,
        });
        alert("게임을 다시 시작합니다!");
        this.setState({ value: "", answer: getNumbers(), tries: [] });
      } else {
        for (let i = 0; i < 4; i += 1) {
          if (answer[i] === this.state.answer[i]) {
            strike += 1;
          } else if (this.state.answer.includes(answerArray[i])) {
            ball += 1;
          }
        }
        this.setState({
          tries: [
            ...this.state.tries,
            {
              try: this.state.value,
              result: `${strike} 스트라이크, ${ball} 볼입니다`,
              value: "",
            },
          ],
        });
      }
    }
    console.log(this.state.value);
  };

  onChangeInput = (e) => {
    console.log(this.state.answer);
    this.setState({
      value: e.target.value,
    });
  };

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
          {/* 성능 최적화, 가독성 측면, 재사용성 측면으로 따로 컴포넌트로 빼는 것이 좋다*/}
          {this.state.tries.map((v, i) => (
            <Try key={`${i + 1}차 시도 : `} tryInfo={v} />
            // <li key={v.fruit + v.taste}>
            //   <b>{v.fruit}</b> - {i}
            //   <div>컨텐츠</div>
            //   <div>컨텐츠1</div>
            //   <div>컨텐츠2</div>
            //   <div>컨텐츠3</div>
            // </li>
          ))}
        </ul>
      </>
    );
  }
}

// export default NumBaseball;
