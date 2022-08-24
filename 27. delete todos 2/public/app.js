const root = document.querySelector('#root');

function App() {
  const [activity, setActivity] = React.useState('');
  const [todos, setTodos] = React.useState([]);

  function addIdActivity() {
    return Date.now();
  }

  function getAktivity(event) {
    event.preventDefault();
    setTodos([...todos, {
      id: addIdActivity(),
      activity: activity
    }]);
    setActivity('');
  }

  function removeTodo(todoId) {
    const filteredTodo = todos.filter(function (todo) {
      return todo.id !== todoId;
    });
    setTodos(filteredTodo);
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
      key: todo.id
    }, todo.activity, /*#__PURE__*/React.createElement("button", {
      onClick: removeTodo.bind(this, todo.id)
    }, "Hapus"));
  })));
}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);