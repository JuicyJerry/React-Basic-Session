const path = require("path");

module.exports = {
  name: "word-relay-setting",
  mode: "development", // 실서비스: production
  devtool: "eval",
  resolve: {
    extensions: [".js", ".jsx"], // 확장자를 써주지 않아도 알아서 찾아준다.
  },
  // 중요!
  entry: {
    app: ["/client", "WordRelay"],
    // app: ["/client.jsx", "WordRelay.jsx"],
    // 입력
  },

  module: {
    rules: [
      {
        test: /\.jsx?/, //  js 파일이랑 jsx파일을 룰을 적용할 것이다
        loader: "babel-loader", // 어떤 룰? 바벨 룰
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
          plugins: ["@babel/plugin-proposal-class-properties"],
          compact: false,
        },
      },
    ],
  }, // 엔트리에 있는 파일을 읽고 모듈을 적용한 후 아웃풋에 뺀다.
  // rules는 여러개의 규칙을 정할 수 있긴 때문에 배열이다.

  output: {
    // 출력
    path: path.join(__dirname, "dist"), // 현재 폴더 안에 있는 dist
    filename: "app.js",
  },
  /* 
    문제가 client.jsx, WordRelay.jsx가 하나로 합쳐줘야 되어서 웹팩이 등장하여  
    index.html에서 src 하나만 넣을 수 있게 된다.
    -> 입력은 client.jsx와  WordRelay.jsx가 되며, 출력은 app.js가 된다.
  */
};
