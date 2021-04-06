const React = require("react");
const ReactDom = require("react-dom");
// 예전에는 script로 불러왔는데 노드의 모듈 시스템으로 이렇게 npm에 설치했던 것을 불러올 수 있다<div className=""></div>

const WordRelay = require("./WordRelay.jsx");

ReactDom.render(<WordRelay />, document.querySelector("#root"));
