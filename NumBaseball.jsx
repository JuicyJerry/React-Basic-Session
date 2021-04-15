import React, { Component } from "react";
import Try from "./Try";
function getNumbers() {} // 숫자 네 개를 겹치지 않고 랜덤하게 뽑는 함수

export default class NumBaseball extends Component {
  // constructor(props) {
  // super(props);
  // this.state = {
  //   result: "",
  //   value: "",
  //   answer: getNumbers(),
  //   tries: [],
  // };
  state = {
    result: "",
    value: "",
    answer: getNumbers(),
    tries: [],
  };
  // this.onSubmitForm = this.onSubmitForm.bind(this);
  // this.onChangeInput = this.onChangeInput.bind(this);
  // }

  // 화살표 함수를 쓰지 않으면 constructor를 다시 써야하는 그 부분이 지저분해질 수 있고 이해가 어려워진다.
  // onSubmitForm(e) {
  //   e.preventDefault();
  //   console.log(this.state.value);
  // }
  onSubmitForm = (e) => {
    e.preventDefault();
    console.log(this.state.value);
  };

  // onChangeInput = () => {};
  // onChangeInput(e) {
  //   console.log(this);
  //   this.setState({
  //     value: e.target.value,
  //   });
  // }
  onChangeInput = (e) => {
    console.log(this); // this 값을 알아볼 수 있다.
    this.setState({
      value: e.target.value,
    });
  };
  fruit = [
    { fruit: "감", taste: "맛있다" },
    { fruit: "귤", taste: "맛있다" },
    { fruit: "배", taste: "맛있다" },
    { fruit: "밤", taste: "맛있다" },
    { fruit: "무", taste: "맛있다" },
    { fruit: "사과", taste: "맛있다" },
  ];

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
          {this.fruit.map((v, i) => (
            <Try value={v} index={i} />
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
