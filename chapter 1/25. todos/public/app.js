const root = document.querySelector('#root');

function App() {
  const [activity, setActivity] = React.useState('');
  const [todos, setTodos] = React.useState([]);

  function getAktivity(event) {
    event.preventDefault();
    setTodos([...todos, activity]);
    setActivity('');
  }

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "Aktivitas Harian"), /*#__PURE__*/React.createElement("form", {
    onSubmit: getAktivity
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "Masukan aktivitas",
    value: activity,
    onChange: function (event) {
      setActivity(event.target.value);
    }
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, "Tambah")), /*#__PURE__*/React.createElement("ul", null, todos.map(function (todo) {
    return /*#__PURE__*/React.createElement("li", {
      key: todo
    }, todo);
  })));
}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);