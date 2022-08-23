const root = document.querySelector('#root');

function App() {
  const fruits = ['Apple', 'Mango', 'Strawberry', 'Sawo'];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("ul", null, fruits.map(function (fruit) {
    return /*#__PURE__*/React.createElement("li", {
      key: fruit
    }, fruit);
  })));
}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);