const root = document.querySelector('#root');

function App() {
  [login, setLogin] = React.useState(false);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "Login Dulu, Bang"), /*#__PURE__*/React.createElement("p", null, login && /*#__PURE__*/React.createElement("b", null, "Kamu sudah login ")), /*#__PURE__*/React.createElement("button", {
    onClick: function () {
      setLogin(true);
    }
  }, "Login"));
}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);