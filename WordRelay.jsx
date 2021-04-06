// client.jsx 에서 바로 사용할 수 있지만 그렇게 하면 재사용성 측면에서 비효율이 발생될 수 있다.
// 그래서 컴포넌트를 나눠주었다.
// npm에서 리액트를 불러와준다.
const React = require("react");
const { Component } = React;

class WordRelay extends Component {
  state = {};

  render() {}
}

module.exports = WordRelay;
