const root = document.querySelector('#root');

function clickFunction(msg) {
  alert(msg);
}

const element = /*#__PURE__*/React.createElement("button", {
  onClick: clickFunction.bind(this, 'Hei aku sudah diklik')
}, "Click Me");
ReactDOM.render(element, root);